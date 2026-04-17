#!/usr/bin/bash
cd -- "$(command dirname -- "$0")" || exit

hash curl jq || exit

api_url=https://api.github.com/repos
file=./transpiler-datas.json
date_updated=$(date -u +"%Y-%m-%d %H:%M:%S")

mapfile -t repos < ./transpiler-repos || exit

first=true
echo "{\"date_updated\": \"$date_updated\", \"repos\": [" > "$file"

for line in "${repos[@]}"; do
    url=${line%%  *}
    name=${line##*  }

    repo=${url#*/*/*/}
    request_url=$api_url/$repo
    entry=$(curl "$request_url" | jq --arg short_name "$name" '{html_url, short_name: $short_name, description, owner: .owner.login, updated_at, stargazers_count}')
    if [ "${PIPESTATUS[0]}" -ne 0 ]; then
        echo "curl failed (${PIPESTATUS[0]})" >&2
        exit "${PIPESTATUS[0]}"
    fi
    if $first; then
        first=false
    else
        echo ',' >> "$file"
    fi
    echo "$entry" >> "$file"
done

echo ']}' >> "$file"

echo 'Update transpiler list finish!'
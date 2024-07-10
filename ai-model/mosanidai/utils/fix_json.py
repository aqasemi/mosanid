import json
import re
from json_repair import repair_json # pip install json-repair


def normalize_dirty_str(dirty_str: str) -> str:
    if "```" in dirty_str:
        s = dirty_str.split("```")[1].strip()
        if s.startswith("json"):
            s = s[len("json"):].strip()
    else:
        s = dirty_str[len("text="):][1:-1].strip()
    return (s.replace("\\'", "'")
            .replace("\\n", "\n")
            .strip())


def fix_json_string(json_str):
    json_str = json_str.strip()
    json_str = re.sub(r',\s*]', ']', json_str)
    fixed_json_str = re.sub(r',\s*}', '}', json_str)
    fixed_json_str = fixed_json_str.strip()

    if not fixed_json_str.startswith('['):
        fixed_json_str = '[' + fixed_json_str
    if not fixed_json_str.endswith(']'):
        fixed_json_str += ']'

    try:
        json_obj = json.loads(fixed_json_str)
        return json.dumps(json_obj)
    except json.JSONDecodeError as e:
        print(f"Error fixing JSON: {e}")
        try:
            last_valid_index = fixed_json_str.rfind('}')
            valid_json_part = fixed_json_str[:last_valid_index + 1] + ']'
            json_obj = json.loads(valid_json_part)
            return json.dumps(json_obj)
        except json.JSONDecodeError as e:
            print(f"Failed to fix JSON: {e}")
            return None


def json_repair_api(json_str):
    json_str = normalize_dirty_str(json_str)
    good_json_string = repair_json(json_str, skip_json_loads=True)
    return good_json_string


def enum_list_to_json(enum_str) -> list:
    pattern = r'\d+\.\s*"question":\s*"([^"]+)",\s*\\n\s*"answer":\s*"([^"]+)"'
    matches = re.findall(pattern, enum_str)

    json_list = [{"question": match[0], "answer": match[1]} for match in matches]

    return json_list


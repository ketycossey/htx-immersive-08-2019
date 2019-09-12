import data

def look_up_person(name):
    results =[ ]
    for entry in entries:
        if name == entry['first_name']:
            results.append(entry)
        elif name == entry['last_name']:
            results.append(entry)
    return results   

print(look_up_person(Kety))



import random

def roll_dice(number_dice = 1, number_sides = 20, bonus = 0):
    output = 0

    for x in range(0, number_dice):
        output += random.randint(1, number_sides)

    return output + bonus

# strength, constitution, dexterity, intelligence, wisdom, charisma
# 3 - 18

# def generate_classic_character():

#     character = {}
#     stats = ["STR", "CON", "DEX", "INT", "WIS", "CHA"]

#     character[stats[0]] = roll_dice(3, 6)
#     character[stats[1]] = roll_dice(3, 6)
#     character[stats[2]] = roll_dice(3, 6)
#     character[stats[3]] = roll_dice(3, 6)
#     character[stats[4]] = roll_dice(3, 6)
#     character[stats[5]] = roll_dice(3, 6)
    
#     return character

# def generate_classic_character():

#     character = {}

#     character["STR"] = roll_dice(3, 6)
#     character["CON"] = roll_dice(3, 6)
#     character["DEX"] = roll_dice(3, 6)
#     character["INT"] = roll_dice(3, 6)
#     character["WIS"] = roll_dice(3, 6)
#     character["CHA"] = roll_dice(3, 6)
    
#     return character

# def generate_classic_character():

#     character = {}
#     stats = ["STR", "CON", "DEX", "INT", "WIS", "CHA"]

#     for stat in stats:
#         character[stat] = roll_dice(3, 6)
    
#     return character

# def generate_classic_character():

#     character = {
#         'STR': roll_dice(3, 6),
#         'CON': roll_dice(3, 6),
#         'DEX': roll_dice(3, 6),
#         'INT': roll_dice(3, 6),
#         'WIS': roll_dice(3, 6),
#         'CHA': roll_dice(3, 6)
#     }

#     return character
    
def generate_classic_character(die = (3, 6), stats = ["STR", "CON", "DEX", "INT", "WIS", "CHA"]):

    character = {}

    for stat in stats:
        character[stat] = roll_dice(die[0], die[1])
    
    return character

print(generate_classic_character())
print(generate_classic_character(stats = ["STR", "CON", "DEX", "INT", "WIS"]))
print(generate_classic_character(die = (4, 6)))
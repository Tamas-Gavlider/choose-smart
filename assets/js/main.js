// Gameplay scenarios
const gamePlay = {
  "1": {
    text: "Your risky investments paid off, and now you belong to the top 10%. What would you like to do next?",
    choices: {
      "1": "Help people in need",
      "2": "Buy luxury items and travel around the world",
      "3": "Buy an island and live there in peace",
      "4": "Make more money"
    }
  },
  "11": {
    text: "World hunger is history. The oceans are clean again. Global warming has slowed down, all thanks to you. But all the hard work and effort to save the world and help people have taken a toll on you. Most of your money is gone. Will you spend your remaining wealth to recover and be healthy again, or fund research to cure cancer?",
    choices: {
      "1": "Cure cancer",
      "2": "Cure myself",
      "3": "Take a bath and think it over"
    }
  },
  "111": {
    text: "The cancer is cured. Thanks to the cure, many other diseases have also been eradicated. The average lifespan has increased to 90 years, and the world population has reached 10 billion. You wanted to help, but it has only made the world overcrowded. You are in a hospital, barely alive. You unmute the TV to hear the news. People are killing each other to occupy houses. World hunger has returned, affecting every continent. In some cities, people have resorted to cannibalism. You turn off the TV. A tear rolls down your face, and you close your eyes forever.",
    choices: {}
  },
  "112": {
    text: "You had surgery, and it was successful. You are living an average life again, working at Tesco, helping people at the self-checkouts. No one notices you; no one thanks you. You will not be remembered as the savior of the world. You go home to your rented apartment, watch a movie, and fall asleep. You wake up, and everything starts again, day after day, for the rest of your life.",
    choices: {}
  },
  "113": {
    text: "You are in the bath, and you’ve decided to donate the rest of your money to cure cancer. You are about to send a message to your advisor when, all of a sudden, you have a seizure. The next day, your maid finds you in the bath, but it is too late. World leaders, pro athletes, and celebrities attend your funeral to pay their respects. You will never be forgiven.",
    choices: {}
  },
  "12": {
    text: "Driving a Lamborghini, spending weekends in Dubai, having the newest iPhone—many people only dream of this. But you? You are living the high life. You leave a party, but you are drunk. What will you do?",
    choices: {
      "1": "I can do anything. I’ll drive home.",
      "2": "Call a taxi.",
      "3": "There’s a great kebab place 5 minutes away by foot. Get some food."
    }
  },
  "121": {
    text: "You may be rich, but it won't make you immortal. You fall asleep and drive straight into a lake. The car is almost filled with water when you wake up. You try to open the doors, break the window, but it’s useless. You take one last deep breath. The movie of your life is almost over. It’s so sad that a life like yours was wasted.",
    choices: {}
  },
  "122": {
    text: "The taxi picks you up and takes you home. During the ride, a song on the radio reminds you of who you really are, where you started, and what you’ve become. You ask the taxi driver to change the route. Where do you want to go?",
    choices: {
      "1": "Visit the house where I grew up",
      "2": "Go to the airport",
      "3": "Never mind, take me home"
    }
  },
  "1221": {
    text: "You arrive at your childhood home. You hesitate, unsure if you should knock on the door or just leave. You take a step forward, getting closer and closer to the door. You are about to knock. 'Are you the new owner?' a teenager asks, stopping their bike in front of the house. 'New owner?' you ask in return. 'The last member of the family who lived here died 2 weeks ago. Did you know them?' You don't answer the teenager. Instead, you turn around, get back into the taxi, and head to the cemetery. Only 2 weeks. If only you had come 2 weeks earlier. You find the tombstone. It's his tombstone. Your dad died, and you didn’t even know. You fall to your knees and start crying. You promise him that you will be a good person from now on. You buy the family house and spend the rest of your life there. You get married, have a bunch of kids, and visit your father's grave every week. You feel happy because you know he would be proud of you.",
    choices: {}
  },
  "1222": {
    text: "You arrive at the airport and buy a first-class ticket to Italy. You wanted to do something spontaneous for once in your life. On the plane, the stewardess brings you a bottle of champagne. You are relaxed and enjoying first class. The plane is over the ocean when it encounters turbulence. You don't panic, thanks to the champagne. You look out the window—it’s pitch black outside. The ocean at night might be the scariest thing you’ve ever seen. The plane shakes violently, and the stewardess asks you to put on your oxygen mask. You are calm; you’re not afraid of dying. Everything seems to move in slow motion. The plane crashes. You’re still strapped into your seat as water floods the cabin. Somehow, you manage to get out of the plane, but as you try to swim to the surface, you only sink deeper. The pressure pulls you down. You know what’s coming. You can’t avoid it. You stop swimming, stop fighting against your fate, and disappear into the darkness.",
    choices: {}
  },
  "1223": {
    text: "You get back to your apartment, open a bottle of whiskey, and stare out the window, watching the city lights at night. You have everything, yet you feel like you have nothing. The song reminded you of all the plans you had as a kid—big, great ideas, all of which have been forgotten. You walk out onto the balcony and climb up to the edge. Closing your eyes, you take a step forward. The fall might only last 10 seconds, but for you, it feels like 10 minutes. There’s a theory that your brain replays your entire life before you die. Well, it’s true. You watch the whole movie of your life from the very beginning. Your first steps, your first words, your first heartbreak, your first love, your first disappointments. All these memories will be gone in a moment.",
    choices: {}
  },
  "123": {
    text: "You are walking down the street. You can already see the restaurant around the corner when you feel a pressure against your back. 'Give me your phone and wallet,' a deep voice demands from behind. You’re drunk, and as you try to get your wallet out of your pocket, you lose your balance. The thief thinks you’re trying to defend yourself, so he fires the gun. You collapse to the ground, feeling blood in your mouth. The thief runs away as three girls rush to help you. One calls an ambulance while the other two try to stop the bleeding. Cody? Is that you? I never thought I’d see you again... My little boy... I missed you so much... I’m sorry I couldn’t save you... I will never... I will never leave you... again...",
    choices: {}
  },
  "13": {
    text: "You open your eyes, feeling the nice breeze. The waves crash as you sip an Aperol Spritz and stare at the ocean. You head back into your house and turn on the TV to check the news. A meteor is heading towards Earth. In 48 hours, it will hit and destroy the planet. What do you want to do?",
    choices: {
      "1": "Turn off the TV and make another Aperol.",
      "2": "Leave the island to meet your friends and family."
    }
  },
  "131": {
    text: "Your Aperol is finished. You walk to the beach and sit down in the sand. Is this really it? You throw your Aperol into the ocean and start shouting. Is this how it ends? I’ve wanted to be alone my whole life, and now that I finally am happy, the universe takes it from me. It’s not fair! You go back to your house and take a bunch of pills. You lie down on your sofa and hum a song. The words barely come out of your mouth. You close your eyes.",
    choices: {}
  },
  "132": {
    text: "Your plane just landed in your hometown. No one knows you’re coming. You stand in front of the house where you grew up and knock on the door. Your father opens it. There are so many things you want to say, and he wants to say, but neither of you can find the words. You just hug him and start crying. 'I know, I know,' your father says. You stay with your family for the rest of your life, making up for lost time. You feel content and at peace, knowing you made the right choice.",
    choices: {}
  },
  "132": {
    text: "Your plane just landed in your hometown. No one knows you’re coming. You stand in front of the house where you grew up and knock on the door. Your father opens it. There are so many things you want to say, and he wants to say, but neither of you can find the words. You just hug him and start crying. 'I know, I know,' your dad says. You go to dinner, and all the family members are there. No one says a single word, and it means more than a thousand words ever could. You share one last meal together. Everyone is happy, and it feels like one of those family dinners when you were ten. After lunch, the whole family sits in the living room. The pictures on the wall fall off, the earth is shaking, and from outside, you hear people shouting, 'Look, it’s so close.' Your dad hugs you and whispers in your ear, 'I’m proud of you, my son.'",
    choices: {}
  },
  "14": {
    text: "No one has as much power as you do. Kings, presidents, and dictators consult with you before making decisions. The public hates you because you’re getting richer while avoiding paying more to your employees. There’s a board meeting, and one of the board members turns on the TV. A meteor is heading toward Earth. In 48 hours, it will hit and destroy the planet. What do you want to do?",
    choices: {
      "1": "Make a few calls to find out if you need to worry about it.",
      "2": "Get your private jet and head to a bunker."
    }
  },
  "141": {
    text: "No one is answering your calls. No one is replying to your messages. The members of the board meeting have left. You are sitting in your office, staring out of the window from the 60th floor. So this is how it ends? You take a gun from the drawer. Your phone rings. One of the world leaders is calling you back. You pick up the phone. 'Sorry I didn’t call you back right away... But this is the end... No one can handle this.' Bang... someone fired a gun, and the call disconnected.",
    choices: {}
  },
  "142": {
    text: "You have arrived at the safest bunker in the world. Someone escorts you from the command center to your room. A large counter shows that 6 hours remain until impact. You’re given the finest room. You unpack your things. Someone knocks on the door. You ignore it. You’re tired and just want to sleep. Seven hours later, you wake up and go to get some food. You walk for seven minutes and see no one. It’s like everyone left while you were asleep. You reach the command center where a video is playing on a loop on a big screen. 'The spaceships launch tomorrow at 8 AM. Be here or you will not survive. The meteor will destroy the entire Earth.' You are confused. You suddenly realize you’ve missed your ride. The lights in the command center start blinking. It’s getting very warm in here. The counter shows 0. The lights go out. You see nothing, and the temperature is rising... 'I need to... I need to get... to... the spaceship!'",
    choices: {}
  },
  "2": {
    text: "You met the love of your life that very night. Your wedding is in an hour. You couldn’t be happier, could you?",
    choices: {
      "1": "I need nothing. My life is perfect.",
      "2": "Have a million dollars.",
      "3": "A nice, cozy house that we can fill with kids."
    }
  },
  "21": {
    text: "Five years have passed just like a moment. Do you still have anything?",
    choices: {
      "1": "I want a divorce. I think I made a mistake.",
      "2": "Tickets to Paris for two.",
      "3": "Yes! My life couldn’t be better."
    }
  },
  "211": {
    text: "You wake up. The night was cold, and you can't feel your legs. After the divorce, you lost everything—your house, your savings, and your loved ones. Your family disinherited you for ruining the family. An ambulance arrives and takes you to the hospital. You don't know what’s happening. The next day, you wake up in the hospital. The doctors saved you, but they had to amputate your legs. You are miserable. A nurse comes in, asking how you feel in Room 8. What do you want to say?",
    choices: {
      "1": "Please, ma'am, help me and end my life.",
      "2": "Tell your story about how you ended up like this."
    }
  },
  "2111": {
    text: "The nurse stares at you and gently touches your face. 'Oh, sweetie, I can't do that. You made some bad decisions that led you into this miserable state, but that doesn't mean this is the end. One day, this will just be a bad memory with a valuable lesson.' The nurse leaves the room, and you find yourself speechless. Maybe she’s right. My decisions led me to this situation. And on this day, you realize that no matter how bad things get, throwing away your life won’t solve anything. You may become part of someone’s life because of their decisions, just as you were a part of many people’s lives with your decisions. A person enters the hospital room and asks if you would give a short interview about living on the streets. 'How did you end up in my room?' you ask. '8 is my lucky number,' the person says. You smile at each other and begin telling your story.",
    choices: {}
  },
  "2112": {
    text: "The nurse listens to your story without interrupting, her eyes full of tears. She injects something into your arm and kisses your forehead. 'Just close your eyes, sweetie,' the nurse says, turning off the lights, closing the door, and leaving the room. You close your eyes, knowing you will never open them again. It is peaceful—after many years, you finally find something to enjoy... the silence.",
    choices: {}
  },
  "212": {
    text: "You are on a plane to Paris with your true love. The plane hits turbulence, and it becomes clear that a crash is inevitable. You panic, but your partner just holds your hand. You look into each other's eyes.\n\n\"I wish we had met 20 years earlier,\" your partner says.\n\n\"Even that wouldn't have been enough time with you,\" you reply.\n\nYou kiss each other as the plane falls apart around you.\n\nEverything goes dark.",
    choices: {}
  },
  "213": {
    text: "It’s been a long time. You lived a long, happy life. You had something that only a few people ever experience—you found your true love. You spent 60 years together, and what were your last words to each other?\n\n\"It wasn't enough. Even 100 years wouldn’t have been.\"\n\nYou kiss each other, hold hands, and say goodbye together.",
    choices: {}
  },
  "22": {
    text: "You had a car accident and are now confined to a wheelchair for the rest of your life. The manufacturer decided to give you $1 million to avoid a lawsuit. While you were hospitalized, your partner divorced you and left with half of the money.\n1. Stay home and hide from the public.\n2. Start rehab and attempt the impossible: walk again.\n3. I can’t stand it anymore—the pain, the heartbreak. I want to quit!",
    choices: {
      "1": "Stay home and hide from the public.",
      "2": "Start rehab and attempt the impossible: walk again.",
      "3": "I can’t stand it anymore—the pain, the heartbreak. I want to quit!"
    }
  },
  "221": {
    text: "You start drinking and taking meds, unable to bear the pain. One day, you take too many pills and fall into a coma.\n\nIt’s been 20 years now. You don’t know what reality is anymore. In your mind, you’re happy with your partner, your kids, and your dog, Cody.\n\nBreakfast in bed, your partner waking you up with kisses, your kids running into the room and jumping on the bed, going for a morning walk with your dog, having picnics, and family dinners together. You are happy now.\n\nDo you want to end this and wake up?",
    choices: {
      "1": "I want to live a real life, no matter what it is.",
      "2": "No, everything is perfect here. This is my reality now."
    }
  },
  "2211": {
    text: "You are in the dining room. You’ve just finished dinner. As you head to the front door, you pause.\n\n\"Don't be afraid. We will be with you forever,\" says your partner from behind you. The kids wave and say goodbye.\n\nYou open the door, and everything turns white.\n\nWhen you open your eyes, you’re in a bed, with people around you asking questions.\n\n\"What happened? Are you okay?",
    choices: {}
  },
  "2212": {
    text: "You are in the dining room. You’ve just finished dinner. Your partner walks to the door and opens it.\n\n\"You've spent enough time with us. It’s time to leave,\" says your partner while holding the door open.\n\nYou walk towards the door, staring at your partner. But then you shut the door.\n\n\"Even a thousand years wouldn’t be enough time with all of you,\" you say, as you kiss each other and sit down. The whole family watches TV together.\n\nIt may not be the happy ending you expected, but you couldn’t be happier.",
    choices: {}
  },
  "222": {
    text: "After three difficult and painful years, you did it—you can walk again. No one would guess that you had an accident a few years ago. But you didn’t stop there. You trained hard, and now you’re about to run a marathon.\nRunning saved your life. It gave you time alone with your thoughts and dreams. You didn’t think about your partner who left you or the hospital bills. You focused on becoming better, stronger—stronger physically and mentally.\nThe marathon starts.\nBy 38 km, you feel a sharp pain on the left side of your chest. Your vision starts to blur, but you keep running. You barely finish the race before collapsing. Everything is a haze. You hear voices—someone asking for a medic, another person trying to give you first aid. The next thing you remember is a medic checking your pulse and asking you something. You lie there, knowing what’s happening.\nThis was the great goal you had. Now that it's accomplished, you can rest.",
    choices: {}
  },
  "223": {
    text: "You are alone in your apartment. You are thinking about how to end this. You are about to take a bath with a microwave when someone knocks on the door. You just ignore it. You get into the bath and drop the microwave in it. It is painful, but not as painful as the past few months. You decided to end your suffering, and you will never know who knocked at the door.",
    choices: {}
  },
  "23": {
    text: "Saturday morning. The smell of fresh pancakes wakes you up. Your kids run into the room and jump on the bed. Your partner is preparing breakfast for your anniversary. Your life is perfect. The younger kid turns on the TV during the family breakfast. A meteor is heading to Earth. In 48 hours, it will hit and destroy the planet. What do you want to do?",
    choices: {
      "1": "Get in the car and try to find a safe place.",
      "2": "Finish the breakfast and reassure your family that the scientists will figure out something."
    }
  },
  "231": {
    text: "You have been on the road for nearly 24 hours. You do not want to look miserable in front of your family, so you keep telling them that everything will be fine. You reach the mountains, to the highest point reachable by car. You park, gather your things, and start walking as high as you can. The meteor is already visible on the horizon. You still have time to go higher. Your kids cannot walk any longer. You pick them up and keep moving forward. You have been walking for the past 2 hours, but the mountain top is not getting any closer.\nOne wrong step, and you sprain your ankle. You can barely move it. You start to cry because you know that you have failed. Your kids and your partner hug you. There is no chance you can get to the top of the mountain, but your family can survive. You ask them to leave you behind, but they choose to stay with you. You hug each other, covering the kids' eyes so they cannot see the meteor. You look into your partner’s eyes and kiss each other.\n\"I love you all,\" you say to your family. Your partner wants to say something, but a shockwave separates you.\nSomething hits your head, and you feel dizzy. You can no longer hold your kids. Everything goes dark.",
    choices: {}
  },
  "232": {
    text: "24 hours have passed. You wake up, preparing to go to work. You look outside the window and see a huge fireball approaching Earth. You stop your preparations and turn on the TV to check the news. There are no updates, just an emergency signal asking citizens to go to a safe place. You look for your family, but they are not home. You try to call your partner, but there is no signal. You go outside and see that your partner's car is gone. Your neighbor is sitting outside on a couch and drinking beer. \"Hi neighbor, I see your family just left. Mine did too, about 30 minutes ago,\" says the neighbor while sipping his beer.\nWhat do you do?",
    choices: {
      "1": "Ask the neighbor which way they went and go after them.",
      "2": "Sit down next to him and have a beer."
    }
  },
  "2321": {
    text: "Hey, which way did they go?\n\"They didn’t say anything; they just got into the car and drove away.\"\nYou see that your neighbor’s car is parked in the driveway.\n\"Would you mind if I borrowed your car?\"\n\"Take it, keep it.\"\nYou get into the car and drive to your partner’s family house. No one is there.\nYou drive to your own family house. No one is there.\nThe meteor is obscuring the sun, and it is getting dark. You are running out of ideas.\n\"Why would they leave without me?\" you ask yourself.\nYou lie on top of the car. The meteor is very loud, and the shockwaves are very strong. It is so dark that you cannot see anything. You can hardly breathe; it is getting hot. With your eyes closed, in your last moments, you are still wondering why your family left.",
    choices: {}
  },
  "2322": {
    text: "\"You know, we never really talked to each other,\" says your neighbor.\n\"How interesting that small decisions, like getting to know each other, might have led to a different outcome. You might have ended up in a safe place, or I might be in a safe place now,\" the neighbor continues.\n\"Small decisions—those are the biggest ones.\"\nYou hear a car engine in the distance. The car turns into the street, and you see that it’s your family.\n\"Where have you been?\" you ask your partner.\n\"We got supplies,\" says your partner.\n\"Supplies for what? There’s nowhere to go.\"\n\"Yes, our neighbor has a bunker where we can all fit.\"\nYou turn to the neighbor.\n\"You told me they left,\" you shout at the neighbor.\n\"Chill out, I like to joke. My family is already there. Would you mind if we join them?\"\nYou all get into the bunker. In the end, it was a safe place. You survived the crash. But you will spend the next few years in the bunker with your family and the neighbors.",
    choices: {}
  },
  "3": {
    text: "You were hit by a truck and were in a coma for 4 years. When you wake up, you suddenly see the world differently. After the accident, something happened to you, and now you are incredibly smart.\nWhat would you like to do with this gift?",
    choices: {
      "1": "Make the world a better place.",
      "2": "Rule the world.",
      "3": "Get some time to think it over.",
      "4": "Make money by investing and gambling."
    }
  },
  "31": {
    text: "World hunger is a thing of the past. The oceans are clean again. Global warming has slowed down, thanks to you. You were in Kenya when you had a seizure. There is a tumor in your brain. It will eventually kill you. Your only hope is surgery, but there is a high chance you might lose your superpower.",
    choices: {
      "1": "I want to live. Heal me at all costs!",
      "2": "Figure out how to heal yourself without losing your power."
    }
  },
  "311": {
    text: "You open your eyes. You no longer feel the pressure in your head. The doctor comes into the room and asks you how you feel, performs some basic checks, and tells you to rest. A few days later, you turn on the TV.\n\"Is a new theory of light and matter needed to explain what happens at very high energies and temperatures?\" asks a reporter from a science show.\nYou are confused; you think about it, but you cannot answer. You don’t even understand the question. Your power is gone.\nYou cry, feeling that your life has ended. In the next moment, a group of people enters your room—your friends, people whose lives were saved by you. When you see their faces and how happy they are that you’re alive, you realize that you may have lost your power, but you will never lose your friends.",
    choices: {}
  },
  "312": {
    text: "You spent countless hours trying to figure out how to heal yourself, but it was not possible with the current technology. So what can you do? The greatest mind in the universe? You built a time machine and have been testing it for the last 2 months. You plan to travel 30 years into the future, where modern technology might be able to save your life.\n\nYou turn on the time machine, set the coordinates, and get ready to go. You sit in the time machine and activate it. Everything goes dark.\n\nWhen you open your eyes, you find yourself in a restroom. You wash your face and leave the restroom. You are in a restaurant and feel confused, not knowing what has happened.\n\nYour father, emerging from a box, waves at you and says:",
    choices: {}
  },
  "32": {
    text: "You just had a meeting with the world leaders! You have them in your grasp. Start a war or ruin a country? The decision is yours. Your phone is ringing; it's the director from NASA. A meteor is heading toward Earth. In 48 hours, it will hit Earth and destroy it. What do you want to do?",
    choices: {
      "1": "Call the world leaders for a meeting.",
      "2": "Make calculations to assess the severity."
    }
  },
  "321": {
    text: "The meeting was pointless. No one had a plan for saving the Earth. No bunker could keep you safe, and no spaceship could take you far enough away. But you will try. Your next stop is the nearest space station. You made some calculations and, theoretically, you could survive in outer space for at least 6 months with a spaceship. Some people want to join you, but you refuse; your chances of survival are higher alone. The spaceship is ready, with no errors found during technical checks. You are set to fly.\n\n10...9....8... As the engineer counts down in the launch control center, you see the meteor. Its size scares you...7....6....5....4.... For the first time, you feel truly frightened because it is more powerful than you...3....2....1 and launch.\n\nIn what feels like a moment, you are in space, at a safe distance from both Earth and the meteor. From outer space, the view is beautiful. Earth and the meteor are minutes away from colliding. You are also minutes away from finding out if your calculations were correct.\n\nYou are thousands of miles from Earth, but the shockwaves hit the spaceship. Humanity ends before your eyes. Officially, you are the last person alive. You know it was a suicide mission. There is nowhere to go. You will spend the next six months alone in this metal box, waiting for the inevitable.",
    choices: {}
  },
  "322": {
    text: "You spend the whole night making calculations and trying to figure out what you can do. You are sitting on your leather sofa, staring blankly ahead.\n\n\"There is no solution,\" you tell yourself desperately.\n\nYou go up to your 20th-floor apartment to wait for the last day. From your balcony, you watch the sky and wonder what might have happened if your life had taken a different path.\n\nIn an instant, everything goes dark. You feel no pain; you simply disappear. The Earth shatters into a million pieces, leaving no chance for survival. You were right, but now you will never be right again.",
    choices: {}
  },
  "33": {
    text: "You wake up in a two-bedroom apartment. You’ve exhausted your energy. You play online poker to afford your apartment and your daily dose of drugs. It is 11 AM. You’re eating cereal while watching South Park when the show gets interrupted. Annoyed, you turn off the TV.\n\nYou start playing poker again. A pop-up ad invites you to test your knowledge and offers $10,000 if you pass the test. What do you do?",
    choices: {
      "1": "Close the ad.",
      "2": "Click on the ad."
    }
  },
  "331": {
    text: "You close the ad that could have changed your life completely. You win an online poker tournament and spend the prize money on drugs.\n\nA few days later, the landlord finds you lying in your own vomit. You’ve overdosed and have been dead for more than 48 hours.\n\nIt’s tragic; you had great potential, but one thing you never had was great responsibility.",
    choices: {}
  },
  "332": {
    text: "You open the test and start filling it out. The next morning, someone knocks on the door. You open it to find two men in black suits standing in front of you. They are looking for you because of the test.\n\nYou can't believe it and laugh at them. You’re about to close the door when one of them sedates you.\n\nYou wake up in a white room with only a bed. A voice asks you how you are.\n\n\"We're sorry for bringing you here this way, but there was no time to explain everything,\" says the voice.\n\n\"You had the highest score on the test, and we needed you. Promise that you won’t try to run away, and I will open the door.\"\n\n\"Okay,\" you reply. As soon as you say it, the door opens. You step out and can hardly believe your eyes.\n\nYou are in space.\n\n\"The world has been destroyed. Based on the test, we had to select the chosen ones to survive the apocalypse. There are 49 others like you, all brought here. We are on a long journey and will reach our destination in 350 years.\"\n\n\"How are we supposed to survive that long?\" you ask.\n\n\"Cryofreeze,\" the voice replies. As soon as the voice says this, everything goes dark.\n\nYou are placed into a capsule and will be frozen for the next 350 years.",
    choices: {}
  },
  "34": {
    text: "You are blacklisted from every casino from Las Vegas to Monaco. You made more than $100 million in just a month, not including your stock and crypto investments. You've been invited as a host for the grand opening of the largest casino in London. The evening goes splendidly, and you’re enjoying yourself, mingling and having drinks with the crowd. They are serving only seafood, which you cannot stand, and you’re really hungry. What do you do?",
    choices: {
      "1": "Give 50 pounds to the next waiter who passes by and ask them to get you some food.",
      "2": "Leave the event and find a nearby restaurant."
    }
  },
  "341": {
    text: "You stop the waiter, and he gladly accepts the 50 pounds to get you some food. After 25 minutes, the waiter returns. As you walk toward him, you suddenly feel a sharp pain in your belly. Another waiter, a rookie, accidentally runs into you with a knife. The rookie, who was supposed to serve only drinks, was asked to bring knives to the buffet table after another waiter went missing. People gather around you, trying to stop the bleeding, but it doesn’t help. The ambulance arrives within 10 minutes. You’re on your way to the hospital but begin having a seizure. Your heart rate drops, and you can hardly breathe. The staff tries to resuscitate you as you arrive at the hospital. They rush you to the surgery room, but it’s too late. You’ve lost too much blood. Sometimes even the smallest decisions can have dire consequences.",
    choices: {}
  },
  "342": {
    text: "You leave the event and stop by the nearest McDonald’s. As you eat, you feel empty inside, alone with your thoughts. You don’t like your life or what you’ve become. It’s not the life you wanted. You are smart, yet you’ve made so many foolish decisions.\n\nYou unlock your phone and call a number. Someone picks up.\n\n\"I know it’s late and I know you don’t want to talk to me, but please just give me one minute. Let me tell you what I want. You were my guiding light, a stable point in my life, the only one. It took me 5 years to realize that. I may be smart, but I was too foolish to see that I was losing you. I just wanted you to know. I’m in London now. If you still have feelings for me, come to the London Bridge. I’ll be here.\"\n\nAn hour passes, then two. You’re about to give up and leave when a taxi pulls up.\n\nYou look at each other; no words are needed. Your emotions speak louder than any words.\n\nYou promise that things will be different now. You get married and spend the rest of your life together. It’s the true happy ending that everyone wishes for.",
    choices: {}
  }
};


// Get user name and age and submit details to start the game

function getStarted() {
  let name = document.getElementById('name').value;
  let age = document.getElementById('age').value;
  let div = document.getElementById('player-details');
  div.innerHTML = `<div id='player-details'><p>Hello ${name}! You had ${age} years to learn that all your actions have consequences!</p>
    <p>Are you ready to play?</p>
    <a href='instructions.html'>How to play?</a>
    <a href='game.html'>Start game</a></div>`;

};
let form = document.getElementById('entry');
if (form) {
  form.addEventListener('submit', getStarted);
};

// Paragraph which will show the consequences of the choice

const consequence = document.getElementById('game-text');

// User choices
const choice1 = document.getElementById('choice1');
const choice2 = document.getElementById('choice2');
const choice3 = document.getElementById('choice3');
const choice4 = document.getElementById('choice4');

// Remove button if it is empty
function hideButton() {
  let buttons = document.getElementsByClassName('choice-btn');
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].textContent.trim() != "") {
      buttons[i].style.display = 'unset';
    } else {
      buttons[i].style.display = 'none';
    }
  };
};

// Remove the Happy Birtday header
function removeHeading() {
  let heading = document.getElementById('heading');
  if (heading) {
    heading.remove();
  }
};

// Loop function to get back to the first choices at some scenarios

function loopGame() {
  let loop = document.getElementById('loop');
  loop.innerHTML = `<a href='game.html' id=loop-link>Come on, it’s your birthday. You need to wish for something...</a> `;
};

// Store the previous choice 
let choice = '';
//Get the value of the first choice
function firstChoice(event) {
  // Use the choice number by removing the choice word and append its number only
  choice += event.target.id.replace('choice', '');
  // Move to the next scenario
  nextChoice();
  removeHeading();
  hideButton();
  if (choice === '312' || choice === '2211') {
    loopGame();
    game();
    changeAudio('assets/media/audio/sad-epic-cinematic-music-classical-233797.mp3');
    
  };
}
  // Function for moving to the next scenario based on the previous choice
  function nextChoice() {
    let scenario = gamePlay[choice];
    consequence.textContent = scenario.text;
    choice1.textContent = scenario.choices['1'];
    choice2.textContent = scenario.choices['2'];
    choice3.textContent = scenario.choices['3'];
    choice4.textContent = scenario.choices['4'];
    hideButton();
  };

  function eventListeners() {
    choice1.addEventListener('click', firstChoice);
    choice2.addEventListener('click', firstChoice);
    choice3.addEventListener('click', firstChoice);
    choice4.addEventListener('click', firstChoice);
    soundtrackButton.addEventListener('click', controlMusic)
  };

// Mute/unmute audio 
let sound = document.getElementById('audio');
let soundtrackButton = document.getElementById('audio-btn');
let audioSource = document.getElementById('audioSource');

function controlMusic() {
    if (sound.muted) {
        sound.muted = false;
        soundtrackButton.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
        sound.play();
    }
    else {
        sound.muted = true;
        soundtrackButton.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    }
}

// Change audio at specific scenarios

function changeAudio(newAudio){
  audioSource.src = newAudio;
  sound.load();
  sound.play();
}

  // Gameplay function which initiates the game

  function game() {
    eventListeners();
    hideButton();
  };

  game();
  
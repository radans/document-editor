export default {
    "content": {
        "type": "doc",
        "content": [{
            "type": "heading",
            "attrs": {"textAlign": "left", "level": 1},
            "content": [{"type": "text", "text": "1. Introduction"}]
        }, {
            "type": "heading",
            "attrs": {"textAlign": "left", "level": 2},
            "content": [{"type": "text", "text": "1.1. 1 Purpose"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "The purpose of this document is to present and describe the software requirements and specifications of Agora."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "Agora is a revolutionary new platform that streamlines the process of organizing and participating in sports and recreational activities events. With a focus on intuitive workflows, Agora streamlines the process of finding players/attendees, replaces the need for multiple chat platforms, and becomes the main hub for sports enthusiasts, trainers, and influencers alike."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "The Agora application can be installed from the "}, {
                "type": "text",
                "marks": [{"type": "comment", "attrs": {"comment_id": "cc86ac1d-768e-4e5e-a437-519185719195"}}],
                "text": "Google play"
            }, {"type": "text", "text": " store or the Apple play store."}]
        }, {
            "type": "heading",
            "attrs": {"textAlign": "left", "level": 2},
            "content": [{"type": "text", "text": "1.2. 2 Project Scope"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "The Scope of this project is as follows:"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "Build a system through which users can create sports and recreation activities events with their friends, as well as request other players to join the event whether one or more are missing."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "Users have the opportunity to search and filter events, invite to the events, ask to join an event, chat inside the event, add friends, chat with friends, share the picture, and share the location."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "Another key feature is an option to group multiple users into organizations administered by the same people to better interact with the platform and multiple events - community."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "Also, a notification system for users to be notified of event changes or possible events at locations near them - suggestions (similar but different from notifications)."
            }]
        }, {
            "type": "heading",
            "attrs": {"textAlign": "left", "level": 2},
            "content": [{"type": "text", "text": "1.3. 3 Document Conventions"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "Text formats:"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "Font: Arial, Constantia (Headings)"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "Font size: 12 for Arial, 16 for Sub-Headings, and 18 for Headings."}]
        }, {
            "type": "heading",
            "attrs": {"textAlign": "left", "level": 2},
            "content": [{"type": "text", "text": "1.4. 4 Intended Audience and Reading Suggestions"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "This document is intended for all stakeholders customers and developers – designers, coders, testers, and maintainers."
            }]
        }, {
            "type": "heading",
            "attrs": {"textAlign": "left", "level": 2},
            "content": [{"type": "text", "text": "1.5. 5 References"}]
        }, {
            "type": "heading",
            "attrs": {"textAlign": "left", "level": 1},
            "content": [{"type": "text", "text": "2. Overall Description"}]
        }, {
            "type": "heading",
            "attrs": {"textAlign": "left", "level": 2},
            "content": [{"type": "text", "text": "2.1. 1 Product Perspective"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "Organizing events in the world of amateur sports can be a cumbersome process with multiple chat platforms, confusing schedules, and disjointed communication. This results in a lack of efficiency and can be frustrating for those involved."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "The product will be created as a standalone application for the web (simple web interface or administration) and mobile applications intended for the users under the Android and ios ecosystems. Mobile and web administration apps will be served API which is to be developed."
            }]
        }, {
            "type": "heading",
            "attrs": {"textAlign": "left", "level": 2},
            "content": [{"type": "text", "text": "2.2. 2 Product Features"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "● "}, {
                "type": "text",
                "marks": [{"type": "bold"}],
                "text": "Sign-in"
            }, {
                "type": "text",
                "text": " is the feature that allows us to create an account on this application. We need to enter a username, email, and password, and after writing this information we should receive a confirmation email. Users can register through other portals (like Gmail, Facebook, and Linkedin)."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "Also, users can invite other users (who are not registered) by email, and when they accept the invitation the registration form will be shown to them. After successful registration, the user is automatically added to the event."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "● "}, {
                "type": "text",
                "marks": [{"type": "bold"}],
                "text": "Log-in"
            }, {
                "type": "text",
                "text": " is the feature that allows us to go into the application with our account and enjoy it. Here we need to enter a username and password with the option to remember it."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "● "}, {
                "type": "text",
                "marks": [{"type": "bold"}],
                "text": "Create Event"
            }, {
                "type": "text",
                "text": " is the feature that allows us to create a specific event that we want. Here we can choose from the dropdown menu to choose a sport or recreational activity (also several members in the team, location, surface, etc.). A list of sports and recreational activities can be modified within the admin web app. Users can choose from this list, along with their custom entry."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "● "}, {
                "type": "text",
                "marks": [{"type": "bold"}],
                "text": "Public/Private"
            }, {"type": "text", "text": " "}, {
                "type": "text",
                "marks": [{"type": "bold"}],
                "text": "event"
            }, {
                "type": "text",
                "text": " is the feature that allows us to set the event we want to be public or private and to manage it. If the event is Public, everyone on the application can see that event and apply. If the event is Private, just invited people can see it."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "● "}, {
                "type": "text",
                "marks": [{"type": "bold"}],
                "text": "Add friends,"
            }, {
                "type": "text",
                "text": " this function becomes essential for every social media application. Every user will have the option to add to a friend list everyone that they want. Also, there will be the option for deleting friends and blocking them."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "● "}, {
                "type": "text",
                "marks": [{"type": "bold"}],
                "text": "Chat"
            }, {
                "type": "text",
                "text": ": Agora will also provide us with a chat feature. There are 3 types of chats that drive the communication: 1on1, chat within the event and chat within the community."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "● "}, {
                "type": "text",
                "marks": [{"type": "bold"}],
                "text": "Create a community profile:"
            }, {
                "type": "text",
                "text": " this allows us to create a profile for a group of people that we want and to allow them to see and participate in events that are created. We can also add pictures, and videos (youtube links) to the community profile. Communities can be private or public. In a private community, users can access only when invited. For the public community, users can join without any restrictions."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "● "}, {
                "type": "text",
                "marks": [{"type": "bold"}],
                "text": "Search for events/communities:"
            }, {
                "type": "text",
                "text": " All users will have the option to search for people and events/communities in the application. For the events, It should be a classic advanced search with available parameters such as location, sport/recreation activity, type of sport/recreation activity, day, time, etc."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "● "}, {
                "type": "text",
                "marks": [{"type": "bold"}],
                "text": "Rate and comment on players and communities:"
            }, {
                "type": "text",
                "text": " this feature will allow us to endorse users with our text, and to write reviews for communities, here we have the opportunity to express our opinion about the user or community."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "For the community: anyone who is a member of the community can rate it 1-10, and anyone can write a comment, but administrators of the community can choose what will be shown on the profile."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "For users: It will be an endorsement type, and every user can choose which will be shown."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "● "}, {
                "type": "text",
                "marks": [{"type": "bold"}],
                "text": "Admin view:"
            }, {
                "type": "text",
                "text": " representing the simple web page for configuring all the global (to be determined as we progress) parameters for Agora For example a list of sports, frequency for suggestions, and tracking user behavior. (Admin view for controlling all entities (time when registering for an event is open, time when chat for the event is deleted, notification frequency, activities list...)"
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "● "}, {
                "type": "text",
                "marks": [{"type": "bold"}],
                "text": "Payment - user types:"
            }, {
                "type": "text",
                "text": " within the planning of the development, we need to consider the future distinction between premium and free profiles within the implemented process under the hood that could easily allow us to limit certain actions based on the user type. For example, limited events attending for the period."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "● "}, {
                "type": "text",
                "marks": [{"type": "bold"}],
                "text": "Notifications and suggestions:"
            }, {
                "type": "text",
                "text": " notifications for regular activities on Agora and suggestions to allow users to be notified about events nearby"
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "● "}, {
                "type": "text",
                "marks": [{"type": "bold"}],
                "text": "Dual language support:"
            }, {"type": "text", "text": " with a translation that can be filled in for all the keys."}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "● "}, {
                "type": "text",
                "marks": [{"type": "bold"}],
                "text": "Calendar:"
            }, {
                "type": "text",
                "text": " is a visual representation of time, typically organized by: days, weeks, months, and years, and it will serve for tracking events and deadlines and it helps individuals and organizations to stay organized and on schedule. It is important to add location in the event field because the event may change and it will be easier to follow. There is an option to import the calendar."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "● "}, {
                "type": "text",
                "marks": [{"type": "bold"}],
                "text": "Maintain the user profile:"
            }, {
                "type": "text",
                "text": " The profile will contain personal information that can be viewed by other users. Edit profile is the feature that allows us to keep the profile up to date. There will be options for changing personal information, adding and changing profile or cover photo, and changing areas of interest (sport/hobby)."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "● "}, {
                "type": "text",
                "marks": [{"type": "bold"}],
                "text": "Apply to an event and community:"
            }, {
                "type": "text",
                "text": " Every user can apply to public events and communities. If the event or community is private only invited users can access it."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "● "}, {
                "type": "text",
                "marks": [{"type": "bold"}],
                "text": "Tracking all the activity:"
            }, {
                "type": "text",
                "text": " for users for future implementation of gamification, the distinction between free and premium accounts, and gain incentives. Everything will be stored in the database and the data will be soft deleted, only in case of a request from the user, the data will be deleted completely."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "● "}, {
                "type": "text",
                "marks": [{"type": "bold"}],
                "text": "Tooltips:"
            }, {
                "type": "text",
                "text": " across the key features within the mobile app to better describe functionalities and workflows."
            }]
        }, {
            "type": "heading",
            "attrs": {"textAlign": "left", "level": 2},
            "content": [{"type": "text", "text": "2.3. 3 User Classes and Characteristics"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "A community profile is intended for organizations to track multiple events and maintain a community of people interested in them. The community can be a specific activity or recreational activity driven or multiple different ones."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "The Administrator is a user of the system who has access to a web application with options to set up the system."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "Agora does not require any special knowledge to use it, anyone can use it easily."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "Users can be of any age, gender, and nationality."}]
        }, {
            "type": "heading",
            "attrs": {"textAlign": "left", "level": 2},
            "content": [{"type": "text", "text": "2.4. 4 Operating Environment"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "The system will operate in multiple environments such as web servers running:"
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "● iOS"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "● Android."}]
        }, {
            "type": "heading",
            "attrs": {"textAlign": "left", "level": 2},
            "content": [{"type": "text", "text": "2.5. 5 Design and Implementation Constraints"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "Being a social networking system, its design should be intuitive and attractive."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "It should be secure so that the user's data and personal information should not be leaked and those have to be securely preserved in the system."
            }]
        }, {
            "type": "heading",
            "attrs": {"textAlign": "left", "level": 2},
            "content": [{"type": "text", "text": "2.6. 6 Assumptions and Dependencies"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "Network and data availability, availability of mobile service."}]
        }, {
            "type": "heading",
            "attrs": {"textAlign": "left", "level": 1},
            "content": [{"type": "text", "text": "3. System Features"}]
        }, {
            "type": "heading",
            "attrs": {"textAlign": "left", "level": 2},
            "content": [{"type": "text", "text": "3.1. 1 Functional Requirements"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "marks": [{"type": "bold"}],
                "text": "Functional Requirements 1: Registration and Authorization"
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "Sign-in"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "● The user can create his account by providing the required personal information about them or they can connect the account with social networks or a Google/Apple account."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "● After registration, users will receive a confirmation email with which they will access the application."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "● After creating the account, it will display the account created successfully."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "Log-in"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "● Users can access the application by entering their: User name and password."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "● There will be the option to remember the account so they don't need to enter the user’s name and password every time."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "● Users can access the application by entering the: User name and password."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "● Forgot password workflow is implemented."}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "marks": [{"type": "bold"}],
                "text": "Functional Requirements 2: Edit Profile information"
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "Personal information about users can be edited at every time."}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "You can edit your proﬁle by the below action:"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "● Edit your personal information setting (name, email, sport/ recreational activity, gender, etc.)."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "● Update Profile/cover picture"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "● We can also add pictures, and videos (youtube links) to the profile."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "marks": [{"type": "bold"}], "text": "Functional Requirements 3: Event"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "Create Event"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "● Users can create an event that he/she/they want."}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "● They can choose between sport or recreational activity and fill in all the necessary information about that."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "● The event can be open or closed."}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "● Admin(s) of an event can invite friends to the event or change the event setting to public."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "● Events can be changed, edited, or deleted by event administrators."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "Join Event"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "● Every person can apply for public events."}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "● When he/she is invited to the closed event, they will get a request do they want to join and additional confirmation by the administrator(s) that their request has been accepted."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "marks": [{"type": "bold"}], "text": "Functional Requirements 4: Add friends"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "Users will have the option to add to their friends list everyone they want."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "People will be notified that they have a friend request and they will have the option to accept or decline requests."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "Also, there will be the option for deleting friends and blocking them."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "marks": [{"type": "bold"}], "text": "Functional Requirements 5: Chat"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "All users will have the option to chat with their friends. There is no “seen” feature."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "Also, when the event is created, all members of that event will have a group chat inside, except when the person who created the event turns it off. Also, the community will have its dedicated chat."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "Administrators of the event or community can mute/unmute specific people, choose for a chat to be in read-only mode for their info only, and admin messages are visually highlighted."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "marks": [{"type": "bold"}],
                "text": "Functional Requirements 6: Notification"
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "All users will have notifications and will receive the following:"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "● When someone accepts/declines a friend request"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "● When someone accepts/declines an event request"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "● When someone wants to join the event (when the event is public)"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "● When an event is about to start (predefined time in admin view for example 24h before an event and 4h before an event)"
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "● Suggestions! Important workflow for sending users the suggestion to nearby events, based on their sports and recreational activities. The frequency of suggestions is configurable on the admin page web app. Suggestions are distinct from other types of notifications."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "marks": [{"type": "bold"}], "text": "Functional Requirements 7: Search"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "All users will have the option to search/filter people, events, and communities in the application. For the events and communities, It should be a classic advanced search with available parameters such as location, sport/hobby, type of sport/hobby, day, time, etc."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "marks": [{"type": "bold"}],
                "text": "Functional Requirements 8: Community Profile"
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "Users will have the option to create a community profile. It will be a group of people and only they will be able to see content there. Also there they can add pictures, videos (youtube links), etc. Communities can be private or public. In a private community, users can access only when invited. For the public community, users can join without any restrictions."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "marks": [{"type": "bold"}],
                "text": "Functional Requirements 9: Rate and comment on players and communities"
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "For the community: Any member of the community can rate it 1-10, and any member can write a comment, but the administrator of the community can choose what will be shown on the profile."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "For Users: There will be an endorsement type, and every user can choose what will be shown."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "marks": [{"type": "bold"}],
                "text": "Functional Requirements 10: Dual language"
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "This feature will allow us to choose what language we want to be shown on the application. This should include a list of available languages and a way for users to select their language preferences. The selected language will be applied to all text and user interface elements in the application."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "marks": [{"type": "bold"}], "text": "Functional Requirements 11: Calendar"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "This feature is a visual representation of time, typically organized by: days, weeks, months, and years, and it will serve for tracking events and deadlines and it helps individuals and organizations to stay organized and on schedule. It is important to add location in the event field because the event may change and it will be easier to follow. There is an option to import the calendar."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "marks": [{"type": "bold"}],
                "text": "Functional Requirements 12: Payment - User types"
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "There will be two types of users, free and premium. Every user will have the option to pay and become a premium user. Premium users will have benefits from the application, for example, limited events attended for the period."
            }]
        }, {
            "type": "heading",
            "attrs": {"textAlign": "left", "level": 2},
            "content": [{"type": "text", "text": "3.2. 2 Non-Functional Requirements"}]
        }, {
            "type": "heading",
            "attrs": {"textAlign": "left", "level": 2},
            "content": [{"type": "text", "text": "3.3. 1 Security"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "Keep your password safe and don't share it with any other people, applications, or websites under any circumstances. We also suggest using a different password for every service you use."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "The system should be secure so that it should not show any cookies regarding the password or the username of the user so that no one rather than the user can access the system."
            }]
        }, {
            "type": "heading",
            "attrs": {"textAlign": "left", "level": 2},
            "content": [{"type": "text", "text": "3.4. 2 Reliability"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "The system provides a database for storage for all kinds of devices whether it is a computer or mobile or something else. The reliability of the whole system depends on the reliability of the separate components. The system should be such reliable that it should not crash or hang during use by the user."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "The main pillar of the reliability of the system is the backup of the database which is continuously maintained and updated to reflect the most recent changes."
            }]
        }, {
            "type": "heading",
            "attrs": {"textAlign": "left", "level": 2},
            "content": [{"type": "text", "text": "3.5. 3 Availability"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "The network has to be available 24 hours a day."}]
        }, {
            "type": "heading",
            "attrs": {"textAlign": "left", "level": 2},
            "content": [{"type": "text", "text": "3.6. 4 Maintainability"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "Some people are there for the maintenance purpose of the system. They can be software engineers or developers. They are there to take care of that if there are some problems regarding the system or not."
            }]
        }, {
            "type": "heading",
            "attrs": {"textAlign": "left", "level": 2},
            "content": [{"type": "text", "text": "3.7. 5 Portability"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "The system consists of scripting languages such as PHP, HTML, etc. It should run on any device and any platform or in any operating system whether it is iOS or Android."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "Technologies that will be used:"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "- Laravel - for backend, notifications service, and email sending"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "- Firebase - only for notifications when the application is closed"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "- Flatter - cross-platform (mainly Android and iOS) application"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "- Ios/Android native - in case we need to cover specific workflows and optimize hardware facilitation"
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "- React - frontend app for administration"}]
        }, {
            "type": "heading",
            "attrs": {"textAlign": "left", "level": 1},
            "content": [{"type": "text", "text": "4. External Interface Requirements"}]
        }, {
            "type": "heading",
            "attrs": {"textAlign": "left", "level": 2},
            "content": [{"type": "text", "text": "4.1. 1 User interfaces"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "Agora's user interface is intuitive and easy to use, such that 99% of new users can use the app without any assistance."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "Various interfaces for Agora should be"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "● Login page"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "● Home page"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "● There will be a screen displaying events, invitations for events, friend requests, etc."
            }]
        }, {
            "type": "heading",
            "attrs": {"textAlign": "left", "level": 2},
            "content": [{"type": "text", "text": "4.2. 2 Hardware Interfaces"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "The whole system is run over the Internet. Without an internet connection, the system will not work. All the hardware should be connected to the internet such as wi-fi."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "The hardware should have the following specifications:"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "● Ability to exchange data over the network"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "● Touch screen for convenience"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "● Ability to connect to the network"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "● Ability to take input from the user"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "● Ability to connect to different applications"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "● Ability to validate user"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "● Ability to locate an event"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "● Should be user-friendly"}]
        }, {
            "type": "heading",
            "attrs": {"textAlign": "left", "level": 2},
            "content": [{"type": "text", "text": "4.3. 3 Software Interfaces"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "The software interfaces are specific to the target of other users’ Agora software systems."
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "Agora demands software like GPS, camera, etc. on the following mobile OS (environment):"
            }]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "● iOS"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "● Android"}]
        }, {
            "type": "heading",
            "attrs": {"textAlign": "left", "level": 2},
            "content": [{"type": "text", "text": "4.4. 4 Communication Interfaces"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{
                "type": "text",
                "text": "Communication between the different parts of the system is important since they depend on each other. However, in what way the communication is achieved is not important for the system and is therefore handled by the underlying operating systems for the mobile application."
            }]
        }, {"type": "heading", "attrs": {"textAlign": "left", "level": 2}}, {
            "type": "heading",
            "attrs": {"textAlign": "left", "level": 2},
            "content": [{"type": "text", "text": "4.5. 5 Data workflow and all modules details"}]
        }, {
            "type": "paragraph",
            "attrs": {"textAlign": "left"},
            "content": [{"type": "text", "text": "Better explained in the corresponding document: AgoraWorkflow.pdf"}]
        }]
    },
    "storage": {
        "comments": [{
            "uuid": "cc86ac1d-768e-4e5e-a437-519185719195",
            "comments": [{
                "comment": "Comment",
                "user": {"firstName": "Radan", "lastName": "Radan", "id": "3IDA5x3JUyWt"},
                "uuid": "82cd0e14-7eba-42a2-b2af-e8c499376147",
                "date": 1684784139586
            }]
        }], "comment_id": null
    }
}
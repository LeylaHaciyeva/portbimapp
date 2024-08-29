import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    "VACANCİES": "VACANCİES",
                    "Start Your Career Journey With Us": "Start Your Career Journey With Us",
                    "Position":"Position",
                    "Location":"Location",
                    "Work type":"Work Type",
                    "Department":"Department",
                    "Skills":"Skills",
                    "Responsibilities":"Responsibilities",
                    "About":"About",
                    "Projects":"Projects",
                    "Career":"Career",
                    "Contact":"Contact",
                    "News":"News",
                    "Menu":"Menu",
                    "Design and MEP":"Design and MEP",
                    "BIM Services":"BIM Services",
                    "Legal and policies":"Legal and policies",
                    "Back to top":"Back to top",
                    "Legal and policies © 2024 PortBIM MMC All Rights Reserved.":"Legal and policies © 2024 PortBIM MMC All Rights Reserved.",
                    "Go back":"Go back",
                    "Send your message":"Send your message",
                    "Name":"Name",
                    "Email":"Email",
                    "Message":"Message",
                    "Phone":"Phone",
                    "These fields are required.":" These fields are required.",
                    "Send Message":"Send Message",
                    "All project types":"All project types",
                    "Culture":"Culture",
                    "Industry":"Industry",
                    "Civic":"Civic",
                    "Health":"Health",
                    "All locations":"All locations",
                    "Date":"Date",
                    "Alphabetical":"Alphabetical",
                    

                    
                }
            },
            ru: {
                translation: {
                    "VACANCİES": "вакансии",
                    "Start Your Career Journey With Us": "Начните свой карьерный путь вместе с нами",
                    "Position":"Позиция",
                    "Location":"Расположение",
                    "Work type":"Тип работы",
                    "Department":"Department",
                    "Skills":"Skills",
                    "Responsibilities":"Responsibilities",
                    "About":"About",
                    "Projects":"Projects",
                    "Career":"Career",
                    "Contact":"Contact",
                    "News":"News",
                    "Menu":"Menu",
                    "Design and MEP":"Design and MEP",
                    "BIM Services":"BIM Services",
                    "Legal and policies":"Legal and policies",
                    "Back to top":"Back to top",
                    "Legal and policies © 2024 PortBIM MMC All Rights Reserved.":"Legal and policies © 2024 PortBIM MMC All Rights Reserved.",
                    "Go back":"Go back",
                    "Send your message":"Send your message",
                    "Name":"Name",
                    "Email":"Email",
                    "Message":"Message",
                    "Phone":"Phone",
                    "These fields are required.":" These fields are required.",
                    "Send Message":"Send Message",
                }
            },
            az: {
                translation: {
                    "VACANCİES": "VAKANSİYALAR",
                    "Start Your Career Journey With Us": "Karyera Səyahətinizə Bizimlə Başlayın",
                    "Position":"Vəzifə",
                    "Location":"Yer",
                    "Work type":"İş növü",
                    "Department":"Department",
                    "Skills":"Bacarıqlar",
                    "Responsibilities":"İş Təsviri & Məsuliyyətlər",
                    "About":"Haqqımızda",
                    "Projects":"Layihələr",
                    "Career":"Karyera",
                    "Contact":"Əlaqə",
                    "News":"Xəbərlər",
                    "Menu":"Menu",
                    "Design and MEP":"Dizayn və MEP",
                    "BIM Services":"BIM Xidmətlər",
                    "Legal and policies":"Hüquq və politika",
                    "Back to top":"Əvvələ",
                    "Legal and policies © 2024 PortBIM MMC All Rights Reserved.":"Legal and policies © 2024 PortBIM MMC All Rights Reserved.",
                    "Go back":"Geriyə",
                    "Send your message":"Mesajınızı göndərin",
                    "Name":"Ad",
                    "Email":"Email",
                    "Message":"Mesaj",
                    "Phone":"Telefon",
                    "These fields are required.":"Bu punktlar tələb olunur",
                    "Send Message":"Göndər",
                }
            }
        },
        lng: localStorage.getItem("lang"),
        fallbackLng: localStorage.getItem("lang"),

        interpolation: {
            escapeValue: false
        }
    });
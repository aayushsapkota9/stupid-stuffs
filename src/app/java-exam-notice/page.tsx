'use client';

import {
  IconAward,
  IconBook,
  IconCalendar,
  IconChevronDown,
  IconClock,
  IconExternalLink,
  IconLanguage,
  IconMail,
  IconMenu2,
  IconPhone,
  IconSearch,
  IconX,
} from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';

// Define the 12 languages and translation contents
const LANGUAGES = [
  { code: 'en', name: 'English', desc: 'Official Announcement', flag: '🇬🇧' },
  { code: 'ne', name: 'नेपाली (Nepali)', desc: 'आधिकारिक सूचना', flag: '🇳🇵' },
  {
    code: 'ne_brainrot',
    name: 'नेपाली Brainrot',
    desc: 'नो क्याप fr fr',
    flag: '🧠🇳🇵',
  },
  {
    code: 'sanskrit',
    name: 'संस्कृतम् (Sanskrit)',
    desc: 'प्राचीन-आधिकारिक-पत्रम्',
    flag: '🛕',
  },
  {
    code: 'pirate',
    name: 'Pirate (Arrr!)',
    desc: 'Scurvy Dog Notice',
    flag: '🏴‍☠️',
  },
  {
    code: 'brainrot',
    name: 'Gen Z / Brainrot',
    desc: 'No cap fr fr',
    flag: '🧠',
  },
  {
    code: 'doge',
    name: 'Doge Speak',
    desc: 'Much Java, very grade',
    flag: '🐕',
  },
  { code: 'yoda', name: 'Yoda Style', desc: 'Exam there is, yes', flag: '👽' },
  {
    code: 'minion',
    name: 'Minion (Banana)',
    desc: 'Tulaliloo ti amo!',
    flag: '🍌',
  },
  { code: 'leet', name: 'L337 Sp34k', desc: 'H4ck3r n071c3', flag: '💻' },
  { code: 'piglatin', name: 'Pig Latin', desc: 'Examway Oticenay', flag: '🐷' },
  { code: 'emoji', name: 'Emoji Only', desc: '☕📝⏰🙌', flag: '✨' },
];

const TRANSLATIONS: Record<string, any> = {
  en: {
    collegeName: 'OXFORD COLLEGE OF ENGINEERING & MANAGEMENT',
    affiliation: '(Affiliated to Pokhara University)',
    address: 'Gaindakot-2, Nawalpur, Nepal',
    boardTitle: 'EXAMINATIONS CONTROLLER DIVISION',
    refNo: 'Ref No: OCEM/EXAM/2026/104',
    dateLabel: 'Date: June 22, 2026',
    docTitle: 'NOTICE ON JAVA MCQ INTERNAL EXAMINATION',
    noticeText:
      'There will be a Java MCQ exam the day after tomorrow. Please make sure to attend the exam. Your participation is highly appreciated. It will also carry 5 marks internal.',
    tableHeaderItem: 'Examination Detail',
    tableHeaderVal: 'Scheduled Value',
    rowDate: 'Exam Date',
    rowDateVal: 'Wednesday, June 24, 2026',
    rowTime: 'Exam Time',
    rowTimeVal: '08:20 AM (Nepal Standard Time)',
    rowMarks: 'Internal Weightage',
    rowMarksVal: '5 Marks (Assessment Record)',
    timerTitle: 'EXAMINATION WALL COUNTDOWN CLOCK',
    liveMessage: 'EXAMINATION IS NOW LIVE! LOG IN TO SYSTEM.',
    days: 'DAYS',
    hours: 'HRS',
    mins: 'MINS',
    secs: 'SECS',
    btnCalendar: 'Add to Google Calendar',
    btnSyllabusOpen: 'Show Exam Syllabus Details',
    btnSyllabusClose: 'Hide Exam Syllabus Details',
    syllabusTitle: 'Syllabus Core Coverage',
    syllabusTopics: [
      {
        name: 'Object-Oriented Programming',
        detail: 'Inheritance, Polymorphism, Abstract classes, Interfaces',
      },
      {
        name: 'Exceptions & File I/O',
        detail: 'Try-catch blocks, Custom exception, Streams, File class',
      },
      {
        name: 'Collections Framework',
        detail: 'List, Set, Map implementation details, Generics',
      },
    ],
    signName: 'Er. Hari Bastola',
    signTitle: 'Chief Controller of Examinations',
    marqueeText:
      '🚨 URGENT ACADEMIC NOTICE: JAVA MCQ INTERNAL EXAMINATION SCHEDULED FOR JUNE 24, 2026 AT 08:20 AM. PARTICIPATION IS MANDATORY FOR INTERNAL ASSESSMENT.',
    selectTitle: 'Official Student Portal Access',
    selectDesc:
      'Please select a language translation below to view the exam announcement board.',
    changeLang: 'Change Notice Language',
    calendarUrl:
      'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Java+MCQ+Exam&dates=20260624T023500Z/20260624T033500Z&details=There+will+be+a+Java+MCQ+exam.+It+carries+5+marks+internal+assessment.+Attendance+is+highly+appreciated.&location=Oxford+Exam+Hall',
  },
  ne: {
    collegeName: 'अक्सफोर्ड कलेज अफ इन्जिनियरिङ्ग एण्ड म्यानेजमेन्ट',
    affiliation: '(पोखरा विश्वविद्यालयबाट सम्बन्धन प्राप्त)',
    address: 'गैँडाकोट-२, नवलपुर, नेपाल',
    boardTitle: 'परीक्षा नियन्त्रकको कार्यालय',
    refNo: 'पत्र संख्या: अ.क.म./परीक्षा/२०८३/१०४',
    dateLabel: 'मिति: असार ८, २०८३',
    docTitle: 'जाभा MCQ आन्तरिक परीक्षा सम्बन्धी सूचना',
    noticeText:
      'पर्सी Java MCQ परीक्षा हुनेछ। कृपया परीक्षामा सहभागी हुन सुनिश्चित गर्नुहोला। तपाईंको सहभागिताको उच्च कदर गरिनेछ। यसले ५ आन्तरिक अंक (internal marks) पनि बोक्नेछ।',
    tableHeaderItem: 'परीक्षा विवरण',
    tableHeaderVal: 'तालिका विवरण',
    rowDate: 'परीक्षा मिति',
    rowDateVal: 'बुधबार, असार १०, २०८३ (पर्सी)',
    rowTime: 'परीक्षा समय',
    rowTimeVal: 'बिहान ८:२० बजे (नेपाली समय)',
    rowMarks: 'आन्तरिक भार',
    rowMarksVal: '५ पूर्णाङ्क (आन्तरिक मूल्याङ्कन)',
    timerTitle: 'परीक्षा हलको डिजिटल भित्ते घडी',
    liveMessage: 'परीक्षा सुरु भइसकेको छ! कृपया लगइन गर्नुहोस्।',
    days: 'दिन',
    hours: 'घण्टा',
    mins: 'मिनेट',
    secs: 'सेकेन्ड',
    btnCalendar: 'गुगल पात्रोमा थप्नुहोस्',
    btnSyllabusOpen: 'परीक्षा पाठ्यक्रम हेर्नुहोस्',
    btnSyllabusClose: 'पाठ्यक्रम विवरण लुकाउनुहोस्',
    syllabusTitle: 'परीक्षाको मुख्य पाठ्यक्रम',
    syllabusTopics: [
      {
        name: 'अब्जेक्ट-ओरिएन्टेड प्रोग्रामिङ',
        detail: 'इन्हेरिटेन्स, पोलिमर्फिज्म, एब्स्ट्र्याक्ट क्लास, इन्टरफेस',
      },
      {
        name: 'एक्सेप्सन ह्यान्डलिङ र फाइल I/O',
        detail: 'ट्राइ-क्याच ब्लक, कस्टम एक्सेप्सन, स्ट्रिमहरू',
      },
      {
        name: 'कलेक्सन्स फ्रेमवर्क',
        detail: 'लिस्ट, सेट, म्याप इम्प्लिमेन्टेसन र जेनेरिक्स',
      },
    ],
    signName: 'इ. हरी बास्तोला',
    signTitle: 'मुख्य परीक्षा नियन्त्रक',
    marqueeText:
      '🚨 जरुरी सूचना: जाभा MCQ आन्तरिक परीक्षा असार १० गते बुधबार बिहान ८:२० बजे हुनेछ। परीक्षामा उपस्थिति अनिवार्य छ।',
    selectTitle: 'आधिकारिक विद्यार्थी पोर्टल',
    selectDesc: 'परीक्षा सूचना बोर्ड हेर्नको लागि कृपया तल भाषा चयन गर्नुहोस्।',
    changeLang: 'सूचनाको भाषा परिवर्तन गर्नुहोस्',
    calendarUrl:
      'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Java+MCQ+Exam&dates=20260624T023500Z/20260624T033500Z&details=There+will+be+a+Java+MCQ+exam.+It+carries+5+marks+internal+assessment.+Attendance+is+highly+appreciated.&location=Oxford+Exam+Hall',
  },
  ne_brainrot: {
    collegeName: 'अक्सफोर्ड स्किबिडी कलेज FR FR',
    affiliation: '(डब्लु रिज पोखरा युनिभर्सिटी सम्बन्धन)',
    address: 'गैँडाकोट-२, नवलपुर (ओहायो क्षेत्र)',
    boardTitle: 'परीक्षा नियन्त्रकको कार्यालय (चीफ म्युअर्स)',
    refNo: 'म्युइङ टिकट: अ.क.म./ग्यात/२०८३/१०४',
    dateLabel: 'ग्राइन्ड मिति: असार ८, २०८३',
    docTitle: 'जाभा MCQ फाइनल बस परीक्षा सम्बन्धी सूचना FR',
    noticeText:
      'यो जाभा MCQ परीक्षा पर्सी हुनेछ fr fr नो क्याप। कृपया परीक्षामा सहभागी हुन सुनिश्चित गर्नुहोला fr। यदि तपाईं आउनुभएन भने तपाईं कक्ड (cooked) भइन्छ ब्रो। यसले ५ आउरा पोइन्ट (aura points) बोक्नेछ, जुन एकदमै रिज (rizz) हो।',
    tableHeaderItem: 'ग्राइन्ड विवरण',
    tableHeaderVal: 'आउरा भ्यालु',
    rowDate: 'ग्राइन्ड मिति',
    rowDateVal: 'बुधबार, असार १०, २०८३ (पर्सी fr)',
    rowTime: 'परीक्षा समय',
    rowTimeVal: 'बिहान ८:२० बजे (नेपाली समय fr)',
    rowMarks: 'आन्तरिक भार',
    rowMarksVal: '५ आउरा पोइन्ट (आन्तरिक रिज)',
    timerTitle: 'क्र्यास आउट हुन बाँकी समय',
    liveMessage: 'लाइभ भयो fr fr! के हामी कक्ड हौँ र?!',
    days: 'दिन',
    hours: 'घण्टा',
    mins: 'मिनेट',
    secs: 'सेकेन्ड',
    btnCalendar: 'पात्रोमा पिन गर्नुहोस् fr',
    btnSyllabusOpen: 'पाठ्यक्रम एकदमै सस देखिँदैछ',
    btnSyllabusClose: 'सस विवरण लुकाउनुहोस्',
    syllabusTitle: 'स्किबिडी परीक्षा गाइड',
    syllabusTopics: [
      {
        name: 'OOP रिजोलोजी',
        detail: 'इन्हेरिटिङ ट्रेड्स, पोलिमर्फिङ लुक, क्लास इन्टरफेस',
      },
      {
        name: 'L हरू क्याच गर्ने (एक्सेप्सन)',
        detail: 'ट्राइ-क्याच द भाइब, कस्टम एरर, क्र्यास आउट',
      },
      {
        name: 'एरे र्‍याक र ह्यास-म्यापहरू',
        detail: 'ग्यातहरूको सूची, म्यापिङ कि एलिमेन्टहरू',
      },
    ],
    signName: 'चीफ रिज्लर हरी बास्तोला',
    signTitle: 'आउरा नियन्त्रण निर्देशक',
    marqueeText:
      '🔥 नो क्याप: जाभा MCQ परीक्षा पर्सी बिहान ८:२० बजे हुनेछ। लिनुहोला नत्र १०० आउरा पोइन्ट गुम्नेछ fr fr!',
    calendarUrl:
      'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Java+MCQ+Exam&dates=20260624T023500Z/20260624T033500Z&details=There+will+be+a+Java+MCQ+exam.+It+carries+5+marks+internal+assessment.+Attendance+is+highly+appreciated.&location=Oxford+Exam+Hall',
  },
  sanskrit: {
    collegeName: 'ओक्सफोर्ड अभियान्त्रिकी एवं प्रबन्धन महाविद्यालयः',
    affiliation: '(पोखरा विश्वविद्यालय सम्बद्धः)',
    address: 'गैँडाकोट-२, नवलपुर, नेपालः',
    boardTitle: 'परीक्षा नियन्त्रण विभागः',
    refNo: 'पत्र संख्या: ओ.सी.ई.एम./परीक्षा/२०२६/१०४',
    dateLabel: 'दिनाङ्कः: २२ जुन २०२६',
    docTitle: 'जाभा बहुविकल्पीयपरीक्षायाः (MCQ) सूचना',
    noticeText:
      'परश्वः जाभा बहुविकल्पीयप्रश्नोत्तरी (MCQ) परीक्षा भविष्यति। कृपया परीक्षायां भागं ग्रहीतुं सुनिश्चितं कुर्वन्तु। भवतः सहभागिता उच्चप्रशंसनीया अस्ति। अस्याः परीक्षायाः पञ्च आन्तरिक-अङ्काः (५ marks internal) अपि सन्ति।',
    tableHeaderItem: 'परीक्षा विवरणम्',
    tableHeaderVal: 'निर्धारितं मूल्यम्',
    rowDate: 'परीक्षा तिथिः',
    rowDateVal: 'बुधवासरः, २४ जुन २०२६',
    rowTime: 'परीक्षा समयः',
    rowTimeVal: 'प्रातः ०८:२० वादने (नेपाल समयः)',
    rowMarks: 'आन्तरिक भारः',
    rowMarksVal: '५ अङ्काः (आन्तरिक मूल्याङ्कनम्)',
    timerTitle: 'परीक्षायाः डिजिटल भित्तिघटी काउन्टडाउन',
    liveMessage: 'परीक्षा सम्प्रति सजीवा अस्ति! कृपया प्रवेशं कुर्वन्तु।',
    days: 'दिनानि',
    hours: 'होराः',
    mins: 'कलाः',
    secs: 'विकलाः',
    btnCalendar: 'गुगल दिनदर्शिकायां योजयतु',
    btnSyllabusOpen: 'पाठ्यक्रमं दर्शयतु',
    btnSyllabusClose: 'पाठ्यक्रमं गोपयतु',
    syllabusTitle: 'मुख्य पाठ्यक्रमः',
    syllabusTopics: [
      {
        name: 'वस्तु-अभिमुखी प्रोग्रामिङ (OOP)',
        detail: 'उत्तराधिकारः, बहुरूपता, अमूर्तवर्गाः, अन्तराफलकम्',
      },
      {
        name: 'अपवादप्रबन्धनं फाइल I/O च',
        detail: 'त्रुटीग्रहणं, स्वकीय-अपवादाः, धाराः (Streams)',
      },
      {
        name: 'सङ्ग्रह संरचना (Collections Framework)',
        detail: 'सूची, समुच्चयः, मानचित्रं तथा जेनेरिक्स',
      },
    ],
    signName: 'इ. हरी बास्तोला',
    signTitle: 'मुख्य परीक्षा नियन्त्रकः',
    marqueeText:
      '🚨 परीक्षा सूचना: परश्वः प्रातः ०८:२० वादने जाभा परीक्षा भविष्यति। सर्वेषां उपस्थितिः अनिवार्या अस्ति।',
    calendarUrl:
      'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Java+MCQ+Exam&dates=20260624T023500Z/20260624T033500Z&details=There+will+be+a+Java+MCQ+exam.+It+carries+5+marks+internal+assessment.+Attendance+is+highly+appreciated.&location=Oxford+Exam+Hall',
  },
  pirate: {
    collegeName: "THE OXFORD SHIP O' ENGINEERING & MANAGEMENT",
    affiliation: '(Commissioned by Pokhara Crew)',
    address: 'Tortuga Haven, Gaindakot Shore',
    boardTitle: "COMMODORE'S GUNNERY OFFICE",
    refNo: "Captain's Log No: OCEM/PLANK/2026/104",
    dateLabel: "Day o' Sea: June 22, 2026",
    docTitle: 'SCURVY DOG WARNING: JAVA MCQ SEA TRIAL',
    noticeText:
      'Ahoy Mateys! There be a Java MCQ trial on the horizon, day after tomorrow! Get yer boots on deck and take the test, or walk the plank! High honors to them who show up. It carries 5 pieces of gold (internal marks) for yer rank!',
    tableHeaderItem: 'Trial Log',
    tableHeaderVal: "Captain's Decree",
    rowDate: 'Trial Day',
    rowDateVal: 'When the Sun Rises Two Days Hence',
    rowTime: 'Tide Time',
    rowTimeVal: '08:20 Bell in the Morning Tide',
    rowMarks: 'Gold Booty',
    rowMarksVal: '5 Shiny Gold Pieces (For Yer Rank)',
    timerTitle: 'SAND IN THE GLASS TILL CANNONFIRE',
    liveMessage: 'BATTLE STATION! THE TRIAL HAS BEGUN!',
    days: 'SUNS',
    hours: 'TIDES',
    mins: 'BELLS',
    secs: 'TICKS',
    btnCalendar: 'Carve in Logbook',
    btnSyllabusOpen: 'Unfurl the Treasure Map',
    btnSyllabusClose: 'Roll up the Map',
    syllabusTitle: 'Scurvy Crew Syllabus',
    syllabusTopics: [
      {
        name: "Oop-ay Cannon Loadin'",
        detail: "Inheritin' booty, polymorphin' shape, captain interface",
      },
      {
        name: "Catchin' Scurvy Exceptions",
        detail: 'Try-catch hold, custom curses, sea-streams',
      },
      {
        name: "Chest o' Lists & Maps",
        detail: "Crews o' Arrays, HashMaps o' Gold",
      },
    ],
    signName: 'Commodore Blackbeard Bastola',
    signTitle: 'Master Gunner of Exams',
    marqueeText:
      '🏴‍☠️ AHOY! JAVA MCQ TEST SHAPING UP IN TWO SUNRISES! PREPARE YER COMPASS AND DO NOT MISS THE BOOTY!',
    selectTitle: "Captain's Cabin Access",
    selectDesc:
      "Unroll the parchment and select yer dialect to read the Commodore's orders.",
    changeLang: 'Swap Dialect',
    calendarUrl:
      'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Java+MCQ+Exam&dates=20260624T023500Z/20260624T033500Z&details=There+will+be+a+Java+MCQ+exam.+It+carries+5+marks+internal+assessment.+Attendance+is+highly+appreciated.&location=Oxford+Exam+Hall',
  },
  brainrot: {
    collegeName: 'OXFORD SKIBIDI COLLEGE FR FR',
    affiliation: '(W Rizz Pokhara Uni Affiliate)',
    address: 'Gaindakot, Nawalpur (Ohio Zone)',
    boardTitle: 'DEPARTMENT OF CHIEF MEWERS',
    refNo: 'Mewing Ticket: OCEM/GYATT/2026/104',
    dateLabel: 'Mew Date: June 22, 2026',
    docTitle: 'NOTICE: JAVA MCQ FINAL BOSS IS COMING FR',
    noticeText:
      "Yo, no cap fr fr, there is a Java MCQ exam day after tomorrow. Absolute W if you pull up, don't miss it or you're cooked. It's giving 5 marks internal assessment, that's pure rizz.",
    tableHeaderItem: 'Grind Status',
    tableHeaderVal: 'Aura Value',
    rowDate: 'Grind Day',
    rowDateVal: 'June 24, 2026 (No cap bestie)',
    rowTime: 'Mewing Time',
    rowTimeVal: '08:20 AM (Before lunch grind)',
    rowMarks: 'Aura Earned',
    rowMarksVal: '5 Aura Points (Internal)',
    timerTitle: 'TIME REMAINING UNTIL WE CRASH OUT',
    liveMessage: 'ITS LIVE FR FR! CHAT ARE WE COOKED?!',
    days: 'DAYS',
    hours: 'HOURS',
    mins: 'MINS',
    secs: 'SECS',
    btnCalendar: 'Pin to Calendar fr',
    btnSyllabusOpen: "Syllabus lookin' kinda sus",
    btnSyllabusClose: 'Close sus details',
    syllabusTitle: 'Skibidi Study Guide',
    syllabusTopics: [
      {
        name: 'OOP Rizzology',
        detail: 'Inheriting traits, polymorphing look, class interfaces',
      },
      {
        name: 'Catching Ls (Exceptions)',
        detail: 'Try-catch the vibe, custom errors, crash outs',
      },
      {
        name: 'Array Racks & HashMaps',
        detail: 'List of gyatts, mapping key elements',
      },
    ],
    signName: 'Chief Rizzler Bastola',
    signTitle: 'Director of Aura Control',
    marqueeText:
      '🔥 NO CAP: JAVA MCQ EXAM DAY AFTER TOMORROW AT 08:20 AM. PULL UP OR GET COOKEED AND LOSE 1000 AURA POINTS!',
    selectTitle: 'Student Lobby Rizz Select',
    selectDesc:
      'Choose your language pack to read the absolute blueprint for the exam.',
    changeLang: 'Change Notice Language',
    calendarUrl:
      'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Java+MCQ+Exam&dates=20260624T023500Z/20260624T033500Z&details=There+will+be+a+Java+MCQ+exam.+It+carries+5+marks+internal+assessment.+Attendance+is+highly+appreciated.&location=Oxford+Exam+Hall',
  },
  doge: {
    collegeName: 'OXFORD COLLAGE OF MUCH ENGINEER & SO MANAGE',
    affiliation: '(Very Affiliated Pokhara, Such University)',
    address: 'Gaindakot, Nawalpur (So Nepal)',
    boardTitle: 'OFFICE OF MUCH GRADES',
    refNo: 'Wow Ref: OCEM/DOGE/2026/104',
    dateLabel: 'Doge Date: June 22, 2026',
    docTitle: 'VERY IMPORTANT: JAVA MCQ TEST NOTICE WOW',
    noticeText:
      'Wow! Day after tomorrow has Java MCQ test. Very attendance. Much appreciated. So 5 internal marks. Such grade. Many coding. Wow.',
    tableHeaderItem: 'Doge Topic',
    tableHeaderVal: 'Much Detail',
    rowDate: 'Such Date',
    rowDateVal: 'Wednesday, June 24 (So date)',
    rowTime: 'So Time',
    rowTimeVal: '08:20 AM Nepal time (So early)',
    rowMarks: 'Very Marks',
    rowMarksVal: '5 Gold Coins (Much internal)',
    timerTitle: 'MUCH COUNTDOWN, VERY TICK TOCK',
    liveMessage: 'EXAM LIVE! VERY CODE! SO WRITE! WOW!',
    days: 'DAYS',
    hours: 'HOURS',
    mins: 'MINS',
    secs: 'SECS',
    btnCalendar: 'Much Add to Log',
    btnSyllabusOpen: 'Such Syllabus, Very Know',
    btnSyllabusClose: 'Much Hide',
    syllabusTitle: 'Much Topics to Learn',
    syllabusTopics: [
      {
        name: 'OOPs Classes Wow',
        detail: 'Much inheritance, very polymorph, so interface',
      },
      {
        name: 'Catch Errors Wow',
        detail: 'Try-catch exceptions, very custom error, so stream',
      },
      {
        name: 'Collection Lists Map',
        detail: 'Many arraylist, much hashmap, so iterate',
      },
    ],
    signName: 'Shiba Bastola',
    signTitle: 'Chief Doge of Exam Department',
    marqueeText:
      '🐕 WOW! JAVA MCQ EXAM SCHEDULED FOR JUNE 24. VERY ATTENDANCE! MANY GRADES! MUCH INTERNAL VALUE! WOW!',
    selectTitle: 'Doge Entrance Gate',
    selectDesc:
      'Select language to enter much notice. Very info. So simple. Wow.',
    changeLang: 'Much Change Lang',
    calendarUrl:
      'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Java+MCQ+Exam&dates=20260624T023500Z/20260624T033500Z&details=There+will+be+a+Java+MCQ+exam.+It+carries+5+marks+internal+assessment.+Attendance+is+highly+appreciated.&location=Oxford+Exam+Hall',
  },
  yoda: {
    collegeName: 'OXFORD ACADEMY OF FORCE & CODES',
    affiliation: '(Pokhara Senate Affiliated)',
    address: 'Gaindakot, Nawalpur System',
    boardTitle: 'COUNCIL OF EXAMINATION JEDI',
    refNo: 'Jedi Order Ref: OCEM/YODA/2026/104',
    dateLabel: 'Chronology: June 22, 2026',
    docTitle: 'EXAM NOTICE: JAVA MCQ TEST, COMING IT IS',
    noticeText:
      'Java MCQ exam, day after tomorrow there will be. Attend, you must. Appreciated, your presence is. 5 internal marks, it carries. Miss it, do not.',
    tableHeaderItem: 'Trial Detail',
    tableHeaderVal: 'Jedi Records',
    rowDate: 'Day of Force',
    rowDateVal: 'Wednesday, June 24, 2026',
    rowTime: 'Toll Hour',
    rowTimeVal: '08:20 AM (Nepal Standard Time)',
    rowMarks: 'Force Weight',
    rowMarksVal: '5 Marks (Internal assessment power)',
    timerTitle: 'TIME REMAINING, THERE IS',
    liveMessage: 'LIVE THE EXAM IS! COMMENCE THE TEST WE MUST!',
    days: 'DAYS',
    hours: 'HRS',
    mins: 'MINS',
    secs: 'SECS',
    btnCalendar: 'Add to Jedi Archive',
    btnSyllabusOpen: 'See Holocron of Topics',
    btnSyllabusClose: 'Close Holocron',
    syllabusTitle: 'Path of the Java Padawan',
    syllabusTopics: [
      {
        name: 'Way of the OOP',
        detail: 'Inheritance paths, polymorphic shapes, interfaces of power',
      },
      {
        name: 'Disturbance in Force (Exceptions)',
        detail: 'Try-catch barriers, custom anomalies, IO flows',
      },
      {
        name: 'Collections of Holocrons',
        detail: 'Storage of Lists, Maps of memory, generic algorithms',
      },
    ],
    signName: 'Jedi Master Bastola',
    signTitle: 'Grand Chancellor of Testing',
    marqueeText:
      '👽 DO OR DO NOT, THERE IS NO TRY. JAVA MCQ EXAM ON WEDNESDAY AT 08:20 AM. FIVE INTERNAL MARKS TO GAIN.',
    selectTitle: 'Select Jedi Archives Portal',
    selectDesc:
      'Select your local system dialect to decode the transmission from the Council.',
    changeLang: 'Change Dialect',
    calendarUrl:
      'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Java+MCQ+Exam&dates=20260624T023500Z/20260624T033500Z&details=There+will+be+a+Java+MCQ+exam.+It+carries+5+marks+internal+assessment.+Attendance+is+highly+appreciated.&location=Oxford+Exam+Hall',
  },
  minion: {
    collegeName: 'OXFORD BANANA DE EN-GE-NYER & MA-NA-GE',
    affiliation: '(Affili-a-te Pokhara Uni)',
    address: 'Gaindakot, Nawalpur (Banana Land)',
    boardTitle: 'OFFICE DE BANANA CONTROLLERS',
    refNo: 'Bello Ref: OCEM/BANANA/2026/104',
    dateLabel: 'Banana Date: June 22, 2026',
    docTitle: 'BELLO! JAVA MCQ TEST DAY AFTER TOMORROW!',
    noticeText:
      'Bello! Java MCQ test day after tomorrow! Tulaliloo ti amo! Please attend exam, tank yu! Carry 5 banana marks! Muak muak muak!',
    tableHeaderItem: 'Banana Item',
    tableHeaderVal: 'Ba-na-na Info',
    rowDate: 'Banana Day',
    rowDateVal: 'Wednesday, Banana 24, 2026',
    rowTime: 'Banana Time',
    rowTimeVal: '08:20 AM (Bello Time)',
    rowMarks: 'Banana Weight',
    rowMarksVal: '5 Big Bananas (Internal marks)',
    timerTitle: 'BANANA COUNTDOWN TICKY TOCKY',
    liveMessage: 'BANANAAA! EXAM IS LIVE! TARA-RA-BOOM-DE-AY!',
    days: 'DAYS',
    hours: 'HOURS',
    mins: 'MINS',
    secs: 'SECS',
    btnCalendar: 'Save Banana Day',
    btnSyllabusOpen: 'Syllabus Banana',
    btnSyllabusClose: 'Hide Banana',
    syllabusTitle: 'Banana Topics to Study',
    syllabusTopics: [
      {
        name: 'OOP Ba-na-na Shapes',
        detail: 'Inheriting yellow color, morphing sizes, skin interfaces',
      },
      {
        name: 'Exception Splatting',
        detail: 'Catching bananas, try-throw error splats',
      },
      {
        name: 'Banana Storage Chest',
        detail: 'List of bananas, hashmap mapping monkeys to banana',
      },
    ],
    signName: 'Minion Bastola (Kevin)',
    signTitle: 'Chief Banana Officer',
    marqueeText:
      '🍌 BELLO! JAVA MCQ TEST IN TWO BANANA SUNRISES! AT EIGHT TWENTY AM. TANK YU FOR ATTENDING!',
    selectTitle: 'Banana Language Selector',
    selectDesc: 'Muak muak! Choose language to read yellow paper instructions!',
    changeLang: 'Change Banana Language',
    calendarUrl:
      'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Java+MCQ+Exam&dates=20260624T023500Z/20260624T033500Z&details=There+will+be+a+Java+MCQ+exam.+It+carries+5+marks+internal+assessment.+Attendance+is+highly+appreciated.&location=Oxford+Exam+Hall',
  },
  leet: {
    collegeName: '0XF0RD C0LL3G3 0F 3NG1N33R1NG & M4N4G3M3N7',
    affiliation: '(Aff1l1473d 70 P0kh4r4 Un1v3r517y)',
    address: 'G41nd4k07-2, N4w4lpur, N3p4l',
    boardTitle: 'D3P4R7M3N7 0F C0MPU73R H4CK5',
    refNo: 'L337 R3f: 0C3M/3X4M/2026/104',
    dateLabel: 'D473: Jun3 22, 2026',
    docTitle: 'N071C3: J4v4 MCQ 3X4M COM1NG 5OON',
    noticeText:
      '7h3r3 w1ll b3 4 J4v4 MCQ 3x4m 7h3 d4y 4f73r 70m0rr0w. Pl3453 m4k3 5ur3 70 4773nd 7h3 3x4m. Y0ur p4r71c1p4710n 15 h1ghly 4ppr3c1473d. 17 w1ll 4l50 c4rry 5m4rk5 1n73rn4l.',
    tableHeaderItem: 'P4r4m373r',
    tableHeaderVal: 'V4lu3',
    rowDate: '3x4m D473',
    rowDateVal: 'W3dn35d4y, Jun3 24, 2026',
    rowTime: '3x4m 71m3',
    rowTimeVal: '08:20 4M (N3p4l 57d 71m3)',
    rowMarks: '1n73rn4l 5c0r3',
    rowMarksVal: '5 M4rk5 (D474 R3c0rd)',
    timerTitle: '71M3 R3M41N1NG UN71L H4CK-3X4M',
    liveMessage: '3X4M 15 N0W L1V3! H4CK 7H3 C0D3!',
    days: 'D4Y5',
    hours: 'H0UR5',
    mins: 'M1N5',
    secs: '53C5',
    btnCalendar: '4dd 70 C4l3nd4r',
    btnSyllabusOpen: 'V13w 5yll4bu5',
    btnSyllabusClose: 'H1d3 5yll4bu5',
    syllabusTitle: 'H4ck3r 5yll4bu5',
    syllabusTopics: [
      {
        name: 'OOP Pwn4g3',
        detail: '1nh3r174nc3, p0lym0rph15m, 4b57r4c7 c0d35, 1n73rf4c35',
      },
      {
        name: '3xc3p710n H4ck5 & I/O',
        detail: '7ry-c47ch, 7hr0w, cus70m pwn5, f1l357r34m5',
      },
      {
        name: 'C0ll3c710n M3m0ry',
        detail: 'L157, 537, M4p structur35, J4v4 g3n3r1c5',
      },
    ],
    signName: 'H4ck3r Bastola',
    signTitle: 'Ro0t Ex4m Adm1n1str4t0r',
    marqueeText:
      '💻 ALERT: JAVA MCQ EXAM SCHEDULED FOR JUNE 24 AT 08:20 AM. RUN ATTENDANCE SCRIPT. INTERNAL MARKS = 5. DO NOT EXCEPTION.',
    selectTitle: 'L337 Sy573m Entry',
    selectDesc:
      '53l3c7 c0d3p4g3 l4ngu4g3 70 d3cryp7 7h3 0f71c14l cl4551f13d n071c3.',
    changeLang: 'Sw4p C0d3p4g3',
    calendarUrl:
      'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Java+MCQ+Exam&dates=20260624T023500Z/20260624T033500Z&details=There+will+be+a+Java+MCQ+exam.+It+carries+5+marks+internal+assessment.+Attendance+is+highly+appreciated.&location=Oxford+Exam+Hall',
  },
  piglatin: {
    collegeName: 'OXFORDWAY OLLEGEWAY OFWAY ENGINEERINGWAY & ANAGEMENTWAY',
    affiliation: '(Affiliatedway otay Okharapay Universityway)',
    address: 'Gaindakotway-2, Nawalpurway, Nepalway',
    boardTitle: 'EXAMINATIONWAY ONTROLLERWAY IVISIONDAY',
    refNo: 'Refway Oway: OCEM/EXAM/2026/104',
    dateLabel: 'Ateday: Unejay 22, 2026',
    docTitle: 'NOTICEWAY ONWAY JAVAWAY MCQ INTERNALWAY EXAMWAY',
    noticeText:
      'Heretay illway ebay ay Avajay MCQ-yay examay ethay ayday afterway omorrowtay. Leasepay akemay uresay otay attenday ethay examay. Ouryay articipationpay isway ighlyhay appreciatedway. Itway illway alsoway arrycay ivefay arksmay internalway.',
    tableHeaderItem: 'Detailway',
    tableHeaderVal: 'Valuee-way',
    rowDate: 'Examway Ateday',
    rowDateVal: 'Ednesdayway, Unejay 24, 2026',
    rowTime: 'Examway Imetay',
    rowTimeVal: '08:20 AM-way (Nepalway Imetay)',
    rowMarks: 'Internalway Marksway',
    rowMarksVal: '5 Arksmay (Internalway)',
    timerTitle: 'IMETAY EMAININGRAY UNTILWAY EXAMWAY',
    liveMessage: 'EXAMWAY ISWAY NOWWAY IVELAY!',
    days: 'AYSDAY',
    hours: 'OURSHAY',
    mins: 'INUTESMAY',
    secs: 'ECONDSSAY',
    btnCalendar: 'Addway otay Alendarcay',
    btnSyllabusOpen: 'Viewway Syllabusway Opicstay',
    btnSyllabusClose: 'Hideway Syllabusway',
    syllabusTitle: 'Syllabusway',
    syllabusTopics: [
      {
        name: 'OOPway Coreway',
        detail: 'Inheritanceway, Polymorphismway, Interfaceway',
      },
      {
        name: 'Exceptionsway',
        detail: 'Try-catchway blocks, Customway errorway',
      },
      { name: 'Collectionsway', detail: 'Listway, Setway, Mapway arraysway' },
    ],
    signName: 'Erway. Hariway Bastolaway',
    signTitle: 'Chiefway Ontrollerway',
    marqueeText:
      '🚨 EXAMWAY WARNINGWAY: JAVAWAY MCQ EXAMWAY ONWAY UNEJAY 24 AT 08:20 AMWAY. FIVEWAY ARKSMAY AT STAKEWAY.',
    selectTitle: 'Portalway Entryway',
    selectDesc:
      'Selectway languageway belowway otay eadray ethay officialway documentway.',
    changeLang: 'Changee-way Languageway',
    calendarUrl:
      'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Java+MCQ+Exam&dates=20260624T023500Z/20260624T033500Z&details=There+will+be+a+Java+MCQ+exam.+It+carries+5+marks+internal+assessment.+Attendance+is+highly+appreciated.&location=Oxford+Exam+Hall',
  },
  emoji: {
    collegeName: '🏫 OXFORD ENGINEERING & MANAGEMENT 🏫',
    affiliation: '🎓 Affiliated Pokhara Uni 🎓',
    address: 'Gaindakot, Nawalpur 🇳🇵',
    boardTitle: '🏛️ EXAM DIVISION 🏛️',
    refNo: '📄 Ref: ☕/📝/104',
    dateLabel: '📅 06/22/2026',
    docTitle: '🚨 NOTICE: ☕ MCQ 📝 🚨',
    noticeText: '📅 ➕ 📅 ➡️ ☕ MCQ 📝💻❗ 😉🙌❤️🤝. ➕5️⃣💯📈.',
    tableHeaderItem: '📋 Item',
    tableHeaderVal: '⚙️ Detail',
    rowDate: '📅 Date',
    rowDateVal: '📅 06/24/2026 (📅➕📅)',
    rowTime: '⏰ Time',
    rowTimeVal: '⏰ 08:20 AM (🇳🇵)',
    rowMarks: '📈 Weight',
    rowMarksVal: '5️⃣ 📈 (School Record)',
    timerTitle: '⏳ DIGITAL WALL CLOCK COUNTDOWN',
    liveMessage: '🚨☕📝🚨 🚀🏃‍♂️💨!',
    days: '⏳',
    hours: '⏰',
    mins: '⏱️',
    secs: '🏃‍♂️',
    btnCalendar: '📅➕ Google',
    btnSyllabusOpen: '📚🔎 Syllabus',
    btnSyllabusClose: '📚❌ Hide',
    syllabusTitle: '📚 Core Syllabus',
    syllabusTopics: [
      {
        name: 'OOP 🧱',
        detail: 'Inheritance 👨‍👦, Polymorphism 🔄, Interface 🔌',
      },
      {
        name: 'Exceptions ⚠️',
        detail: 'Try-catch 🧤, Custom error 💥, Streams 🌊',
      },
      { name: 'Collections 📦', detail: 'Lists 📋, Maps 🗺️, Generics 🛡️' },
    ],
    signName: '🎓 Bastola Er. 🎓',
    signTitle: '👑🏛️ Exam Head',
    marqueeText:
      '🚨 ☕ MCQ 📝 📅 06/24/2026 ⏰ 08:20 AM 🇳🇵 ❗ 5️⃣ 📈 ❗ 🚶‍♂️ Attendance mandatory ❗',
    selectTitle: '🌐 Portal Dialect selection',
    selectDesc: '👇 Click language icon below to open announcement board.',
    changeLang: '🌐 Swap Language',
    calendarUrl:
      'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Java+MCQ+Exam&dates=20260624T023500Z/20260624T033500Z&details=There+will+be+a+Java+MCQ+exam.+It+carries+5+marks+internal+assessment.+Attendance+is+highly+appreciated.&location=Oxford+Exam+Hall',
  },
};

export default function JavaExamNotice() {
  const [mounted, setMounted] = useState(false);
  const [language, setLanguage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSyllabus, setShowSyllabus] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Countdown Timer State
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  // Target Date: Wednesday, June 24, 2026, 08:20 AM Nepal Standard Time (UTC+5:45)
  const targetTime = new Date('2026-06-24T08:20:00+05:45').getTime();

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem('java-exam-notice-lang-stupid');
    if (savedLang && TRANSLATIONS[savedLang]) {
      setLanguage(savedLang);
    } else {
      setIsModalOpen(true);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const updateTimer = () => {
      const diff = targetTime - Date.now();

      if (diff <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
        });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds, isExpired: false });
    };

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
    return () => clearInterval(timerInterval);
  }, [mounted, targetTime]);

  const selectLanguage = (code: string) => {
    setLanguage(code);
    localStorage.setItem('java-exam-notice-lang-stupid', code);
    setIsModalOpen(false);
  };

  if (!mounted) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-200 p-6 font-serif text-slate-800">
        <div className="text-center p-8 bg-white border-2 border-blue-800 shadow-md rounded max-w-sm">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-800 mx-auto"></div>
          <p className="mt-4 font-bold text-sm tracking-wider text-blue-800">
            PORTAL INITIALIZING / लोड हुँदैछ...
          </p>
        </div>
      </div>
    );
  }

  const activeCode = language || 'en';
  const t = TRANSLATIONS[activeCode] || TRANSLATIONS.en;

  return (
    <div className="min-h-screen bg-[#f4f7f9] font-serif text-slate-900 pb-16 relative">
      {/* College Info Top Banner (Deep Blue) */}
      <div className="bg-[#0b5c9e] text-white text-[11px] sm:text-xs py-2 px-4 font-sans tracking-wide flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <IconPhone size={12} className="inline" /> +977-78-501078
          </span>
          <span className="hidden sm:flex items-center gap-1">
            <IconMail size={12} className="inline" /> info@oxfordcollege.edu.np
          </span>
        </div>
        <div className="flex items-center gap-4 text-[10px] sm:text-xs text-white/90">
          <a href="#" className="hover:underline">
            Campus Life
          </a>{' '}
          |
          <a href="#" className="hover:underline">
            Apply Online
          </a>{' '}
          |
          <a href="#" className="hover:underline">
            Alumni
          </a>{' '}
          |
          <a href="#" className="hover:underline">
            Achievements
          </a>{' '}
          |
          <a href="#" className="hover:underline">
            CSR
          </a>
        </div>
      </div>

      {/* Main Branding Header */}
      <header className="bg-white py-4 px-4 sm:px-6 shadow-sm border-b border-zinc-200">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          {/* Logo / Crest Area */}
          <div className="flex items-center gap-2.5">
            {/* Elegant SVG Crest matching Oxford College Logo exactly */}
            <div className="w-14 h-14 bg-white text-[#0b5c9e] flex items-center justify-center rounded-full border-2 border-blue-500 shadow-sm relative overflow-hidden flex-shrink-0">
              <svg viewBox="0 0 100 100" className="w-12 h-12">
                {/* Outer rings */}
                <circle
                  cx="50"
                  cy="50"
                  r="46"
                  fill="none"
                  stroke="#eab308"
                  strokeWidth="1.8"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="#0b5c9e"
                  strokeWidth="1.2"
                />

                {/* Six-pointed star (Hexagram) */}
                <polygon
                  points="50,16 76,62 24,62"
                  fill="none"
                  stroke="#0b5c9e"
                  strokeWidth="1.5"
                />
                <polygon
                  points="50,68 76,22 24,22"
                  fill="none"
                  stroke="#0b5c9e"
                  strokeWidth="1.5"
                />

                {/* Inner Shield / Circle */}
                <circle
                  cx="50"
                  cy="42"
                  r="8"
                  fill="white"
                  stroke="#0b5c9e"
                  strokeWidth="1.2"
                />
                <text
                  x="50"
                  y="45"
                  fontSize="8"
                  fontWeight="bold"
                  fill="#0b5c9e"
                  textAnchor="middle"
                >
                  OX
                </text>

                {/* ESTD 2000 */}
                <text
                  x="50"
                  y="80"
                  fontSize="5"
                  fontWeight="bold"
                  fill="#0b5c9e"
                  textAnchor="middle"
                >
                  ESTD. 2000
                </text>
              </svg>
            </div>
            <div>
              <h1 className="text-md sm:text-xl font-bold tracking-tight text-[#0b5c9e] leading-tight">
                OXFORD COLLEGE
              </h1>
              <p className="text-[9px] sm:text-[11px] font-bold text-slate-500 font-sans tracking-wider uppercase">
                OF ENGINEERING AND MANAGEMENT
              </p>
            </div>
          </div>

          {/* Navigation Links & Search (Right-aligned, matching screenshot) */}
          <div className="hidden lg:flex items-center gap-6 font-sans text-xs font-bold tracking-wider text-slate-700">
            <span className="hover:text-[#0b5c9e] cursor-pointer">HOME</span>
            <span className="hover:text-[#0b5c9e] cursor-pointer flex items-center gap-0.5">
              ABOUT <IconChevronDown size={12} />
            </span>
            <span className="hover:text-[#0b5c9e] cursor-pointer flex items-center gap-0.5">
              MEMBERS <IconChevronDown size={12} />
            </span>
            <span className="hover:text-[#0b5c9e] cursor-pointer flex items-center gap-0.5">
              PROGRAMS <IconChevronDown size={12} />
            </span>
            <span className="hover:text-[#0b5c9e] cursor-pointer flex items-center gap-0.5">
              EXAMINATION <IconChevronDown size={12} />
            </span>
            <span className="hover:text-[#0b5c9e] cursor-pointer flex items-center gap-0.5">
              FACILITIES <IconChevronDown size={12} />
            </span>
            <span className="hover:text-[#0b5c9e] cursor-pointer flex items-center gap-0.5">
              RESEARCH <IconChevronDown size={12} />
            </span>
            <span className="hover:text-[#0b5c9e] cursor-pointer">BLOG</span>
            <span className="hover:text-[#0b5c9e] cursor-pointer">
              DOWNLOADS
            </span>
            <IconSearch
              size={16}
              className="text-slate-500 cursor-pointer hover:text-[#0b5c9e]"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-[#0b5c9e] focus:outline-none"
          >
            {mobileMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-zinc-200 px-6 py-4 font-sans text-xs font-bold text-slate-700 flex flex-col gap-3 shadow-md">
          <span className="hover:text-[#0b5c9e] cursor-pointer py-1">HOME</span>
          <span className="hover:text-[#0b5c9e] cursor-pointer py-1 flex items-center justify-between">
            ABOUT <IconChevronDown size={12} />
          </span>
          <span className="hover:text-[#0b5c9e] cursor-pointer py-1 flex items-center justify-between">
            MEMBERS <IconChevronDown size={12} />
          </span>
          <span className="hover:text-[#0b5c9e] cursor-pointer py-1 flex items-center justify-between">
            PROGRAMS <IconChevronDown size={12} />
          </span>
          <span className="hover:text-[#0b5c9e] cursor-pointer py-1 flex items-center justify-between">
            EXAMINATION <IconChevronDown size={12} />
          </span>
          <span className="hover:text-[#0b5c9e] cursor-pointer py-1 flex items-center justify-between">
            FACILITIES <IconChevronDown size={12} />
          </span>
          <span className="hover:text-[#0b5c9e] cursor-pointer py-1 flex items-center justify-between">
            RESEARCH <IconChevronDown size={12} />
          </span>
          <span className="hover:text-[#0b5c9e] cursor-pointer py-1">BLOG</span>
          <span className="hover:text-[#0b5c9e] cursor-pointer py-1">
            DOWNLOADS
          </span>
        </div>
      )}

      {/* Centered Tagline Bar (From Screenshot) */}
      <div className="bg-white py-3 border-b border-zinc-200 text-center">
        <p className="text-red-650 text-red-600 font-sans font-bold text-sm tracking-wide sm:text-base italic">
          &quot;Our Vision is to Serve Your Mission&quot;
        </p>
      </div>

      {/* Scrolling Warning Marquee - Classic Nepalese college site feature */}
      <div className="bg-amber-300 text-neutral-900 border-b border-amber-400 py-1.5 px-4 font-sans font-bold text-xs overflow-hidden whitespace-nowrap shadow-sm">
        {React.createElement(
          'marquee',
          { scrollamount: '5', className: 'cursor-default' } as any,
          t.marqueeText
        )}
      </div>

      {/* Misty gaindakot river backdrop filter overlay */}
      <div
        className="absolute inset-x-0 top-[180px] bottom-0 -z-10 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 10% 20%, rgba(179, 214, 237, 0.4) 0%, transparent 60%),
            radial-gradient(circle at 90% 80%, rgba(200, 225, 240, 0.3) 0%, transparent 60%),
            linear-gradient(to bottom, #dbeafe 0%, #ffffff 80%)
          `,
        }}
      ></div>

      {/* Language Selection Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in font-sans">
          <div className="w-full max-w-2xl bg-white border-t-8 border-[#0b5c9e] rounded shadow-2xl p-6 sm:p-8 animate-fade-in">
            <div className="text-center pb-4 border-b border-zinc-200">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-[#0b5c9e] mb-2">
                <IconLanguage size={24} />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0b5c9e]">
                {t.selectTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                {t.selectDesc}
              </p>
            </div>

            {/* Language Selection Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 max-h-[320px] overflow-y-auto pr-2">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => selectLanguage(lang.code)}
                  className={`flex items-center gap-3 p-3 text-left border rounded transition-all hover:bg-blue-50 hover:border-[#0b5c9e] ${
                    activeCode === lang.code
                      ? 'border-[#0b5c9e] bg-blue-50/50 font-bold'
                      : 'border-zinc-200'
                  }`}
                >
                  <span className="text-2xl flex-shrink-0">{lang.flag}</span>
                  <div>
                    <div className="text-sm font-semibold text-slate-800">
                      {lang.name}
                    </div>
                    <div className="text-[10px] text-slate-500">
                      {lang.desc}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-200 text-center">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-zinc-200 text-zinc-700 font-bold text-xs rounded hover:bg-zinc-300 uppercase tracking-wider transition-colors"
              >
                Close / बन्द गर्नुहोस्
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Notice Sheet */}
      <main className="max-w-4xl mx-auto px-4 mt-8 relative">
        {/* Language Quick-Switch button on page */}
        <div className="flex justify-end mb-3">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-zinc-50 border border-zinc-300 text-slate-700 font-sans font-bold text-xs rounded shadow-sm transition-colors"
          >
            <IconLanguage size={14} className="text-[#0b5c9e]" />
            {t.changeLang}
          </button>
        </div>

        {/* Notice Board Paper */}
        <article className="bg-white border border-zinc-300 border-t-8 border-t-[#0b5c9e] shadow-lg p-6 sm:p-12 relative overflow-hidden">
          {/* Background Watermark Crest */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.012] flex items-center justify-center">
            <svg
              viewBox="0 0 100 100"
              className="w-[450px] h-[450px] fill-current text-[#0b5c9e]"
            >
              <polygon points="50,16 76,62 24,62" />
              <polygon points="50,68 76,22 24,22" />
            </svg>
          </div>

          {/* Letterhead Header */}
          <div className="text-center border-b border-double border-zinc-400 pb-4">
            <h2 className="text-md sm:text-xl font-bold tracking-tight text-[#0b5c9e] uppercase">
              {t.collegeName}
            </h2>
            <p className="text-[10px] sm:text-xs text-slate-500 italic mt-0.5">
              {t.affiliation} • Gaindakot, Nawalpur, Nepal
            </p>
            <p className="text-xs font-bold tracking-widest text-[#0b5c9e] mt-1.5 uppercase font-sans">
              {t.boardTitle}
            </p>
          </div>

          {/* Doc Metadata */}
          <div className="flex justify-between items-center mt-3 text-xs text-slate-600 font-semibold border-b border-zinc-200 pb-2">
            <span>{t.refNo}</span>
            <span>{t.dateLabel}</span>
          </div>

          {/* Document Main Title */}
          <div className="text-center my-6">
            <h3 className="text-md sm:text-lg font-bold text-red-700 underline uppercase decoration-1 decoration-offset-2">
              {t.docTitle}
            </h3>
          </div>

          {/* Notice Body */}
          <div className="my-8 text-sm sm:text-base leading-relaxed text-slate-800 text-justify indent-8 border-l-4 border-[#0b5c9e] pl-4 bg-blue-50/20 py-3 rounded-r">
            {t.noticeText}
          </div>

          {/* Notice Details Table */}
          <div className="my-6 overflow-x-auto">
            <table className="min-w-full divide-y divide-zinc-350 border border-zinc-300 text-xs sm:text-sm">
              <thead className="bg-zinc-50 font-sans">
                <tr>
                  <th
                    scope="col"
                    className="px-4 py-2.5 text-left font-bold text-[#0b5c9e] border-r border-zinc-300 uppercase"
                  >
                    {t.tableHeaderItem}
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-2.5 text-left font-bold text-[#0b5c9e] uppercase"
                  >
                    {t.tableHeaderVal}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 font-sans">
                <tr>
                  <td className="px-4 py-2.5 font-bold text-slate-600 border-r border-zinc-300">
                    {t.rowDate}
                  </td>
                  <td className="px-4 py-2.5 font-semibold text-slate-900">
                    {t.rowDateVal}
                  </td>
                </tr>
                <tr className="bg-zinc-50/50">
                  <td className="px-4 py-2.5 font-bold text-slate-600 border-r border-zinc-300">
                    {t.rowTime}
                  </td>
                  <td className="px-4 py-2.5 font-semibold text-slate-900">
                    {t.rowTimeVal}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-bold text-slate-600 border-r border-zinc-300">
                    {t.rowMarks}
                  </td>
                  <td className="px-4 py-2.5 font-bold text-amber-700 flex items-center gap-1.5">
                    <IconAward size={16} className="text-amber-500" />
                    {t.rowMarksVal}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Classroom digital LED countdown wall clock */}
          <div className="my-8 pt-6 border-t border-zinc-200">
            <div className="text-center text-xs font-bold text-slate-600 font-sans tracking-widest uppercase mb-3 flex items-center justify-center gap-1">
              <IconClock size={14} className="text-red-500" />
              {t.timerTitle}
            </div>

            {timeLeft.isExpired ? (
              <div className="text-center font-bold text-sm bg-rose-50 border border-rose-300 text-rose-700 py-3 rounded uppercase font-sans">
                {t.liveMessage}
              </div>
            ) : (
              /* Bezel casing */
              <div className="mx-auto max-w-sm bg-[#1e1e1e] border-4 border-neutral-600 rounded shadow-2xl p-4 flex flex-col items-center">
                <div className="grid grid-cols-4 gap-2 text-center w-full">
                  {[
                    { label: t.days, val: timeLeft.days },
                    { label: t.hours, val: timeLeft.hours },
                    { label: t.mins, val: timeLeft.minutes },
                    { label: t.secs, val: timeLeft.seconds },
                  ].map((block, idx) => (
                    <div
                      key={idx}
                      className="bg-black border border-zinc-900 p-2.5 rounded flex flex-col items-center shadow-inner"
                    >
                      {/* Red LED digital numeric segments */}
                      <span className="font-mono text-xl sm:text-3xl font-bold text-red-500 tracking-tight filter drop-shadow-[0_0_5px_rgba(239,68,68,0.8)]">
                        {String(block.val).padStart(2, '0')}
                      </span>
                      <span className="text-[8px] sm:text-[9px] font-sans font-bold text-zinc-500 tracking-wider mt-1 uppercase">
                        {block.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Signoff stamp block */}
          <div className="mt-12 flex justify-end relative">
            {/* Authentic Red/Blue official round ink stamp */}
            <div className="absolute right-14 -top-8 pointer-events-none opacity-85 select-none transform -rotate-12">
              <svg
                viewBox="0 0 100 100"
                className="w-24 h-24 text-red-600/80 stroke-current fill-none font-sans font-bold"
              >
                <circle cx="50" cy="50" r="42" strokeWidth="2.5" />
                <circle cx="50" cy="50" r="37" strokeWidth="1.2" />

                {/* Curved paths for text */}
                <path
                  id="stamp-text-path"
                  d="M 18,50 A 32,32 0 1,1 82,50"
                  className="hidden"
                />
                <path
                  id="stamp-text-path-bottom"
                  d="M 82,50 A 32,32 0 0,1 18,50"
                  className="hidden"
                />

                <text fontSize="7.5" fill="currentColor" textAnchor="middle">
                  <textPath href="#stamp-text-path" startOffset="50%">
                    * OXFORD COLLEGE OF ENG. & MGMT. *
                  </textPath>
                </text>
                <text fontSize="7.5" fill="currentColor" textAnchor="middle">
                  <textPath href="#stamp-text-path-bottom" startOffset="50%">
                    EXAMINATION DIVISION
                  </textPath>
                </text>

                {/* Center text box */}
                <rect
                  x="25"
                  y="44"
                  width="50"
                  height="12"
                  fill="white"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <text
                  x="50"
                  y="52"
                  fontSize="8.5"
                  fill="currentColor"
                  textAnchor="middle"
                >
                  APPROVED
                </text>
              </svg>
            </div>

            {/* Signature text */}
            <div className="text-right z-10 font-sans mr-2">
              <div className="font-serif italic text-lg text-blue-800/85 select-none pr-8 mb-1 leading-none transform -rotate-2">
                H.Bastola
              </div>
              <div className="w-44 border-t border-zinc-400 my-1 ml-auto"></div>
              <div className="text-xs font-bold text-slate-800 leading-tight">
                {t.signName}
              </div>
              <div className="text-[10px] font-semibold text-slate-500">
                {t.signTitle}
              </div>
            </div>
          </div>
        </article>

        {/* Buttons / Supplementary Area */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href={t.calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 px-4 py-3 bg-[#0b5c9e] hover:bg-[#094d85] text-white font-sans font-bold text-xs sm:text-sm uppercase tracking-wider rounded shadow transition-all hover:scale-102"
          >
            <IconCalendar size={16} />
            {t.btnCalendar}{' '}
            <IconExternalLink size={12} className="inline ml-1" />
          </a>

          <button
            onClick={() => setShowSyllabus(!showSyllabus)}
            className="flex-1 flex items-center justify-center gap-1.5 px-4 py-3 bg-zinc-200 hover:bg-zinc-300 text-zinc-800 border border-zinc-300 font-sans font-bold text-xs sm:text-sm uppercase tracking-wider rounded transition-colors"
          >
            <IconBook size={16} />
            {showSyllabus ? t.btnSyllabusClose : t.btnSyllabusOpen}
          </button>
        </div>

        {/* Syllabus Dropdown Content */}
        {showSyllabus && (
          <div className="mt-4 p-6 bg-white border border-zinc-300 rounded shadow-sm animate-fade-in font-sans">
            <h4 className="text-sm sm:text-md font-bold text-[#0b5c9e] border-b border-zinc-200 pb-2 mb-3 flex items-center gap-1.5">
              <IconBook size={18} />
              {t.syllabusTitle}
            </h4>
            <p className="text-xs text-slate-500 mb-4">{t.syllabusDesc}</p>
            <div className="space-y-3">
              {t.syllabusTopics.map((topic: any, idx: number) => (
                <div
                  key={idx}
                  className="p-3 bg-zinc-50 border border-zinc-200 rounded"
                >
                  <h5 className="text-xs sm:text-sm font-bold text-[#0b5c9e]">
                    {topic.name}
                  </h5>
                  <p className="text-xs text-slate-600 mt-1">{topic.detail}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Official styled site footer */}
      <footer className="mt-16 text-center text-xs text-slate-500 font-sans border-t border-zinc-200 pt-6">
        <p>
          © 2026 Oxford College of Engineering and Management.
        </p>
        <p className="text-[10px] text-slate-400 mt-1">
          Meant for fun and learning purpose.
        </p>
      </footer>
    </div>
  );
}

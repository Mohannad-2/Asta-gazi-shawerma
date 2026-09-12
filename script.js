/**
 * USTA GHAZI (أسطا غازي) - RESTAURANT INTERACTIVE SCRIPT
 * Bilingual (EN/AR), Shawarma Customizer, Live Hours, Order Tray, WhatsApp Formatter.
 */

// BILINGUAL TRANSLATION DICTIONARY
const TRANSLATIONS = {
  en: {
    statusChecking: "Checking opening status...",
    statusOpen: "🟢 Open Now in Al Tahliya (Closes at 4:00 AM)",
    statusClosed: "🔴 Closed right now • Opens at 11:00 AM",
    topAddress: "King Khalid Rd, Al Tahliya",
    navHome: "Home",
    navSpecialty: "Red Bread 🔥",
    navGallery: "Photos 📸",
    navMenu: "Menu & Prices",
    navReviews: "Google Reviews",
    navLocation: "Location & Hours",
    navContact: "Contact",
    callBtn: "Call 0501475425",
    heroBadge: "Charcoal-Grilled Shawarma • Khobar",
    heroTitle: "Taste The Authentic <br><span class=\"text-highlight\">Usta Ghazi</span> Touch",
    heroSubtitle: "شاورما أسطا غازي على الفحم - الطعم الأصلي، الخبز الأحمر المميز، وبوكسات الجمعات حتى ٣٠ قطعة",
    heroDesc: "Known across Al Tahliya for premium charcoal-grilled shawarma, hygienic craft, signature spiced Red Bread (خبز أحمر), and gathering boxes. Open daily until 4:00 AM.",
    exploreMenuBtn: "Explore Menu & Prices",
    waOrderBtn: "WhatsApp Order",
    statGoogle: "Google Rating",
    statHours: "Late Night Dining",
    statArabi: "Arabi Gathering Boxes",
    signatureTag: "Signature Specialty",
    showcaseTitle: "Spicy Red Bread Shawarma (خبز أحمر)",
    showcaseDesc: "Freshly sliced shawarma loaded into spiced warm red flatbread with melted cheese & signature garlic cream.",
    showcasePrice: "Starting from 8 SAR",
    customizeNowBtn: "Customize & Order",
    specBadge: "MUST-TRY IN KHOBAR",
    specTitle: "The Legendary \"Red Bread\" (الخبز الأحمر)",
    specDesc: "What sets Usta Ghazi apart is our signature red bread seasoned with Anatolian red pepper spices and toasted until crisp. Available for our classic sandwiches, jumbo Saroukh, and all Arabi gathering sizes!",
    specF1Title: "Spiced Red Dough",
    specF1Desc: "Authentic savory aroma",
    specF2Title: "Melty Cheese Addition",
    specF2Desc: "Rich melted cheese layer",
    specF3Title: "Saroukh & Arabi Boxes",
    specF3Desc: "Available in all portion sizes",
    viewRedBreadBtn: "View Red Bread Menu",
    galleryBadge: "SIGNATURE SELECTIONS",
    galleryTitle: "Signature Dishes & Specialties",
    galleryDesc: "A glimpse of our appetizing shawarma spit, seasoned red bread shawarma, Arabi gathering boxes, and platters.",
    tagSpit: "Fresh Daily Spit",
    spitTitle: "The Master Shawarma Spit (سيخ الشاورما)",
    spitDesc: "Stacked cuts roasted on the open flame until deeply caramelized and juicy.",
    tagBox: "Gathering Box",
    boxTitle: "The Arabi Gathering Box (شاورما عربي)",
    boxDesc: "Crisp sliced shawarma rolls served with piping hot fries, garlic toum, and signature dips.",
    orderBoxLink: "Choose Box Size (6-30 pcs) →",
    tagPlatePhoto: "Shawarma Platter",
    plateTitle: "The Shawarma Platter (صحن شاورما)",
    plateDesc: "A feast of pure sliced chicken shawarma, golden french fries, fresh warm bread, and tangy pickles.",
    orderPlateLink: "Order Platter →",
    tagWrapPhoto: "Classic & Red Bread",
    wrapTitle: "Toasted Shawarma Wrap (ساندوتش شاورما)",
    wrapDesc: "Packed with juicy chicken shawarma, crispy fries, garlic toum, pickles, and toasted until crisp.",
    orderWrapLink: "Customize Sandwich →",
    tagRedShawarma: "Signature Red Bread",
    redShawarmaTitle: "Spiced Red Bread Shawarma (خبز أحمر)",
    redShawarmaDesc: "Freshly sliced chicken shawarma packed into our seasoned Anatolian spiced flatbread and toasted to perfection.",
    orderRedShawarmaLink: "Order Red Bread →",
    tagFriesPhoto: "Golden Sides",
    friesTitle: "Golden Crispy Fries (بطاطس مقلية)",
    friesDesc: "Crisp golden french fries seasoned with our house spice blend, served piping hot with creamy garlic toum.",
    orderFriesLink: "Add Fries to Order →",
    instaBadge: "Official Restaurant Page",
    instaBioText: "Specialists in charcoal-grilled shawarma • Hours: 11:00 AM to 4:00 AM • Al Khobar, Al Tahliyah • Tel: 0501475425",
    instaPosts: "Posts",
    instaFollowers: "Followers",
    viewInstaPostsBtn: "Browse 30+ Posts & Stories on Instagram",
    menuBadge: "OFFICIAL MENU & PRICES",
    menuTitle: "Authentic Shawarma Selection",
    menuDesc: "Prepared fresh to order using Lebanese or Saj bread. Tap any item to customize with or without garlic, pickles, fries, and extra cheese!",
    viewOriginalMenuBtn: "View Original Menu Photo",
    catAll: "All Items",
    catSandwiches: "🥪 Sandwiches (ساندويشات)",
    catArabi: "🍱 Arabi Boxes (شاورما عربي)",
    catPlates: "🍽️ Plates & Fries (صحون)",
    catDrinks: "🥤 Drinks (مشروبات)",
    titleSandwiches: "Shawarma Sandwiches",
    subSandwiches: "ساندويشات شاورما (خبز لبناني / صاج)",
    metaSandwiches: "Lebanese or Saj Bread",
    popularRibbon: "Popular",
    topSellerRibbon: "Top Seller",
    feastRibbon: "Feast",
    tagClassic: "Classic",
    tagCheese: "🧀 Cheese",
    tagRedBread: "🌶️ Red Bread",
    tagCombo: "🌶️ + 🧀 Combo",
    tagJumbo: "🚀 Jumbo Large",
    tagJumboCheese: "🧀 Jumbo Cheese",
    tagJumboRed: "🌶️ Jumbo Red",
    tagSupreme: "🔥 Top Seller",
    addCustomBtn: "+ Customize & Order",
    addToTrayBtn: "+ Add to Order",
    addBoxBtn: "+ Customize & Order",
    descNormal: "Classic shaved shawarma wrapped in warm Lebanese or thin Saj bread with garlic toum and pickles.",
    descCheese: "Classic shawarma sandwich layered with melted creamy cheddar cheese for an extra rich bite.",
    descRed: "Signature specialty: seasoned Anatolian red bread toasted crispy with succulent chicken shawarma.",
    descRedCheese: "The ultimate combo: signature spiced red bread stuffed with chicken shawarma and rich melted cheddar.",
    descSaroukh: "Extra-long jumbo wrap packed with heavy portions of shawarma, garlic toum, and fries inside.",
    descSaroukhCheese: "Jumbo Saroukh with an indulgent coat of melted cheese throughout the whole roll.",
    descSaroukhRed: "Jumbo wrap in our famous seasoned red bread, toasted crispy with garlic and fries inside.",
    descSaroukhRedCheese: "The heavy champion: jumbo spiced red bread filled with chicken shawarma, melted cheese, and toasted crisp.",
    titleArabi: "Shawarma Arabi Boxes",
    subArabi: "شاورما عربي (صناديق وبوكسات الجمعات ٦ إلى ٣٠ قطعة)",
    metaArabi: "Includes crispy fries, garlic toum & pickles",
    arabiBadgeFresh: "Signature Box",
    arabiBoxHeading: "Arabi Gathering Boxes (6 to 30 pcs)",
    arabiBoxSubheading: "Sliced toasted shawarma served with hot crispy fries, garlic toum, and signature pickles.",
    arabiInstructionsTitle: "Select Your Arabi Box Size:",
    arabiInstructionsDesc: "Tap a size below to compare bread & cheese options, or add straight to your order tray:",
    pSolo: "Solo / 1 Person",
    pMedium: "Medium",
    pDouble: "Double Box",
    pGathering: "Gathering",
    pParty: "Party Box",
    pJumbo: "Jumbo Feast",
    arabiVarNormal: "Regular",
    arabiVarCheese: "Cheese",
    arabiVarRed: "Signature 🔥",
    arabiVarRedCheese: "Ultimate Combo",
    arabiNameNormal: "Arabic Shawarma (شاورما عربي)",
    arabiNameCheese: "With Cheese (عربي بالجبن)",
    arabiNameRed: "Red Bread (عربي خبز أحمر)",
    arabiNameRedCheese: "Red Bread + Cheese (أحمر بالجبن)",
    arabiDescNormal: "Crisply sliced wrap box served with hot french fries, creamy garlic sauce, and pickles.",
    arabiDescCheese: "Sliced arabi wrap with melted creamy cheese infused with garlic sauce & fries.",
    arabiDescRed: "Our iconic spiced red flatbread sliced in bite-sized pieces with fries & garlic.",
    arabiDescRedCheese: "Spiced red bread + melted cheese filling for the supreme Usta Ghazi flavor experience.",
    toggleTableText: "Show Full Arabi Price Matrix (6 to 30 pcs)",
    thPieces: "Pieces (قطع)",
    thRegular: "Regular (عادي)",
    thCheese: "Cheese (بالجبن)",
    thRed: "Red Bread (خبز أحمر)",
    thRedCheese: "Red + Cheese (أحمر بالجبن)",
    titlePlates: "Plates & French Fries",
    subPlates: "شاورما صحن وبطاطس",
    metaPlates: "Pure sliced shawarma without wrap bread",
    descPlate: "A generous platter of tender sliced chicken shawarma served with fresh bread, golden fries, garlic dip, and pickles.",
    descBigPlate: "Extra-large platter loaded with succulent chicken shawarma cuts, multiple bread portions, large fries, and extra sauces for sharing.",
    descFriesSmall: "Crispy golden deep-fried potatoes seasoned with special spices.",
    descFriesLarge: "Heaping portion of hot crispy french fries, perfect for sharing.",
    tagPlate: "Regular Platter",
    tagBigFeast: "👑 Big Feast",
    tagSide: "Side",
    tagLargeSide: "Large Side",
    titleDrinks: "Beverages & Drinks",
    subDrinks: "المشروبات",
    metaDrinks: "Ice Cold Refreshments",
    descSoftDrinks: "Assorted ice cold canned soft drinks (Pepsi, 7Up, Mirinda, Citrus, etc.).",
    descWater: "Pure bottled drinking water, chilled.",
    tagChilled: "Chilled",
    tagEssential: "Essential",
    reviewsBadge: "VERIFIED CUSTOMER FEEDBACK",
    reviewsTitle: "What Customers Say on Google Maps",
    reviewsDesc: "Honest experiences from shawarma lovers and Khobar residents who visit us in Al Tahliya.",
    googleRevTag: "Google Reviews",
    googleRatingSub: "Based on verified Google Maps reviews in Al Khobar",
    openGmapsBtn: "Open in Google Maps",
    rfAll: "All Reviews",
    rfMeat: "Shawarma Quality",
    rfRed: "Red Bread (خبز أحمر)",
    rfLate: "Late Night",
    rfClean: "Cleanliness",
    rVerified: "Verified Google Review",
    r1Name: "Local Guide • Google User",
    r1Body: "\"Usta Ghazi is the best shawarma spot I’ve tried in Khobar; I want everyone to give it a try. You can really taste the quality of the shawarma, and the place is also very clean. I’d like to thank the owner.\"",
    r1Badge1: "⭐ Best Shawarma in Khobar",
    r1Badge2: "✨ Super Clean Place",
    r2Body: "\"The Red Bread (خبز أحمر) Saroukh with cheese is top tier! It has the perfect seasoning that you can't find anywhere else in Tahliya. Fast service and very friendly staff.\"",
    r2Badge1: "🌶️ Red Bread Saroukh",
    r2Badge2: "🧀 Cheese Lover",
    r3Body: "\"Lifesaver late at night! They stay open until 4 AM and the quality at 2 AM is just as fresh and hot as lunchtime. Clean kitchen counter right in front of your eyes.\"",
    r3Badge1: "🌙 Open until 4 AM",
    r3Badge2: "🍟 Fresh Hot Fries",
    r4Body: "\"Ordered the 18-piece Arabi gathering box for family night. Huge portions, generous garlic toum, and everyone loved the mix of regular and red bread slices. Great prices too!\"",
    r4Badge1: "📦 Arabi 18 Pcs Box",
    r4Badge2: "💰 Excellent Value",
    swipeHint: "Swipe horizontally on mobile to read more reviews",
    locBadge: "FIND US IN AL KHOBAR",
    locTitle: "Visit Usta Ghazi",
    locDesc: "Conveniently situated along the lively King Khalid Road commercial strip in Al Tahliya, right near Al Tazaj.",
    locAddressLabel: "Address",
    locAddressText: "8526 King Khalid Rd, 3148, Al Tahliyah, Al Khobar 34717, Saudi Arabia",
    locLandmark: "📍 Near Al Tazaj & Al Amwaj District",
    locHoursLabel: "Opening Hours",
    locHoursText: "Saturday to Friday: 11:00 AM – 4:00 AM",
    hoursBadgeOpen: "🟢 Open Now (Closes 4:00 AM)",
    hoursBadgeClosed: "🔴 Closed (Opens 11:00 AM)",
    locPhoneLabel: "Phone & Orders",
    locPhoneSub: "Quick pickup & takeout ordering",
    locInstaLabel: "Instagram",
    locInstaSub: "Follow us for daily updates & stories",
    getDirectionsBtn: "Get Directions",
    callUsBtn: "Call 0501475425",
    overlayLoc: "King Khalid Rd, Al Tahliya",
    ctaTitle: "Craving Genuine Shawarma & Red Bread?",
    ctaDesc: "Give Usta Ghazi a call or order ahead on WhatsApp. Hot, fresh, and ready when you arrive!",
    ctaCall: "Call 0501475425",
    ctaWhatsApp: "Order on WhatsApp",
    footerTagline: "Usta Ghazi Charcoal Shawarma • Al Tahliya, Al Khobar",
    mobCall: "Call",
    mobOrder: "Order",
    trayTitle: "Your Order Tray",
    emptyTrayTitle: "Your order tray is currently empty.",
    emptyTraySub: "Tap \"+ Customize & Order\" on any sandwich or Arabi box to tailor your shawarma!",
    trayTotalLabel: "Estimated Total:",
    traySendWABtn: "Send Order to WhatsApp (0501475425)",
    trayCallDirectBtn: "Or Call 0501475425 Directly",
    orderNumPrefix: "Order",
    orderAssignedTitle: "Your Unique Order Number:",
    orderTypeTitle: "Service Type",
    optCarPickup: "🚗 Car Pickup",
    optTakeaway: "🛍️ Takeaway",
    optDineIn: "🍽️ Dine-in",
    carInfoLabel: "Car Model & Color",
    carPlateLabel: "Plate Number (Optional)",
    carInfoPlaceholder: "e.g. White Camry / Black Tahoe",
    carPlatePlaceholder: "e.g. 1234 ABC",
    carHint: "🚗 Curbside service: We'll bring your hot order directly to your car window when you arrive!",
    origMenuModalTitle: "Original Shawarma Menu (شاورما أسطا غازي)",
    custBreadTitle: "Bread Selection (نوع الخبز)",
    custRequired: "Required",
    custGarlicTitle: "Garlic Sauce (الثومية)",
    custChooseOne: "Choose one",
    optGarlicNormal: "Normal Garlic (ثوم عادي)",
    optGarlicExtra: "Extra Toum (ثوم زيادة)",
    optGarlicNone: "Without Garlic (بدون ثوم)",
    custPicklesTitle: "Pickles (المخلل)",
    optPicklesWith: "With Pickles (مع مخلل)",
    optPicklesNone: "Without Pickles (بدون مخلل)",
    custFriesTitle: "Fries Inside (البطاطس داخل الساندوتش)",
    optFriesWith: "With Fries Inside (مع بطاطس)",
    optFriesNone: "Without Fries Inside (بدون بطاطس)",
    custAddonsTitle: "Sauces & Extra Add-ons (الصلصات والإضافات)",
    custOptional: "Optional",
    addonSpicy: "Spicy Shatta (شطة حارة)",
    addonMolasses: "Pomegranate Molasses (دبس رمان)",
    addonCheese: "Extra Melted Cheese (+1 SAR)",
    addonCrispy: "Extra Toasted / Crispy (تحمير زيادة / مقمر)",
    custNotesTitle: "Special Instructions (ملاحظات خاصة)",
    authSignIn: "Sign In",
    authSignUp: "Sign Up",
    authLoginTab: "Log In",
    authRegisterTab: "Sign Up",
    authFullName: "Full Name",
    authFullNamePh: "e.g. Faisal Al-Otaibi",
    authPhone: "Phone Number",
    authPhonePh: "5X XXX XXXX",
    authPassword: "Password",
    authPasswordPh: "At least 6 characters",
    authRemember: "Remember me",
    authCarModel: "Car Model & Color (Optional for Pickup)",
    authCarModelPh: "e.g. White Camry",
    authPlate: "Plate Number (Optional)",
    authPlatePh: "e.g. 1234 ABC",
    authLoginBtn: "Log In",
    authCreateBtn: "Create Account",
    authLogout: "Log Out",
    otpBack: "Back",
    otpTitle: "Security Verification",
    otpSubtitle: "We sent a 4-digit code via SMS to:",
    otpResendIn: "Resend code in",
    otpResend: "Resend Code",
    otpVerifyBtn: "Verify & Continue",
    otpInvalid: "Incorrect verification code. Please try again.",
    otpExpired: "Code expired. Please click Resend Code.",
    otpSentSuccess: "New 4-digit verification code sent via SMS!",
    authProfileTitle: "My Account",
    authProfileSubtitle: "Manage your pickup info and past orders",
    authSavedVehicle: "Saved Pickup Vehicle",
    authSavedVehicleDesc: "Auto-fills your car details when ordering",
    authSaveBtn: "Save Vehicle Details",
    authPastOrders: "Order History",
    authNoOrders: "No previous orders found yet.",
    authOrderNum: "Order",
    authDate: "Date",
    authItems: "Items",
    authTotal: "Total",
    authGuestPrompt: "Have an account? Log in to auto-fill car details & track orders."
  },
  ar: {
    statusChecking: "جاري التحقق من ساعات العمل...",
    statusOpen: "🟢 مفتوح الآن في تحلية الخبر (يغلق 4:00 فجراً)",
    statusClosed: "🔴 مغلق حالياً • يفتح الساعة 11:00 صباحاً",
    topAddress: "طريق الملك خالد، تحلية الخبر",
    navHome: "الرئيسية",
    navSpecialty: "الخبز الأحمر 🔥",
    navGallery: "الصور 📸",
    navMenu: "قائمة الطعام والأسعار",
    navReviews: "آراء العملاء",
    navLocation: "الموقع وساعات العمل",
    navContact: "تواصل معنا",
    callBtn: "اتصل 0501475425",
    heroBadge: "شاورما أسطا غازي على الفحم • الخبر",
    heroTitle: "تذوق اللمسة الأصلية <br><span class=\"text-highlight\">شاورما أسطا غازي</span>",
    heroSubtitle: "شاورما أسطا غازي على الفحم - الطعم الأصلي، الخبز الأحمر المميز، وبوكسات العربي حتى ٣٠ قطعة في تحلية الخبر",
    heroDesc: "المطعم الأفضل في تحلية الخبر لتقديم شاورما الدجاج على الفحم بنظافة فائقة، والخبز الأحمر المحمر بالبهارات، وبوكسات الجمعات حتى 4 فجراً.",
    exploreMenuBtn: "تصفح المنيو والأسعار",
    waOrderBtn: "طلب عبر واتساب",
    statGoogle: "تقييم قوقل ماب",
    statHours: "خدمة حتى الفجر",
    statArabi: "بوكسات عربي حتى ٣٠ قطعة",
    signatureTag: "الصنف المميز والأشهر",
    showcaseTitle: "شاورما خبز أحمر مميز (بالجبن)",
    showcaseDesc: "شاورما طازجة محضرة في الخبز الأحمر الحار والمتبل بالبهارات الأناضولية مع الجبن السائل والكريمة.",
    showcasePrice: "يبدأ من 8 ريال",
    customizeNowBtn: "تخصيص وطلب",
    specBadge: "لا تفوت تجربته في الخبر",
    specTitle: "الخبز الأحمر الأسطوري (سر أسطا غازي)",
    specDesc: "ما يميز أسطا غازي هو الخبز الأحمر الخاص المعجون والمتبل بالفلفل والبهارات ومحمص على الصاج حتى القرمشة. متوفر للساندوتش العادي والصاروخ وبوكسات الجمعات!",
    specF1Title: "عجينة حمراء متبلة",
    specF1Desc: "نكهة ورائحة زكية فريدة",
    specF2Title: "إضافة جبن سائل شيدر",
    specF2Desc: "طبقة جبن ذائبة وغنية",
    specF3Title: "ساندوتش، صاروخ وبوكسات",
    specF3Desc: "متوفر بجميع الأحجام والأشكال",
    viewRedBreadBtn: "منيو الخبز الأحمر",
    galleryBadge: "مختاراتنا الشهية",
    galleryTitle: "أشهى أطباق أسطا غازي",
    galleryDesc: "تشكيلة مميزة من سيخ الشاورما على الفحم، الخبز الأحمر المميز، بوكسات الجمعات، والصحون المشبعة.",
    tagSpit: "سيخ طازج يومياً",
    spitTitle: "سيخ الشاورما الذهبي الفاخر",
    spitDesc: "شرائح دجاج طازجة متبلة بخلطتنا الخاصة ومشوية على اللهب حتى الاستواء والتحمير الذهبي.",
    tagBox: "بوكس الجمعات",
    boxTitle: "بوكس الشاورما العربي الشهير",
    boxDesc: "قطع شاورما مقرمشة ومقطعة بعناية مع بطاطس مقلية ساخنة، صوص ثوم كريمي، ومخلل متبل.",
    orderBoxLink: "اختر حجم البوكس (٦ إلى ٣٠ قطعة) ←",
    tagPlatePhoto: "صحن الشاورما المشبع",
    plateTitle: "صحن شاورما أسطا غازي",
    plateDesc: "وجبة شاورما بدون خبز مع بطاطس مقلية ذهبية، خبز طازج، مخلل، وصوص الثومية المميز.",
    orderPlateLink: "اطلب الصحن الآن ←",
    tagWrapPhoto: "كلاسيك وخبز أحمر",
    wrapTitle: "ساندوتش الشاورما المحمص",
    wrapDesc: "محشو بقطع الشاورما الطرية، البطاطس، الثوم والمخلل ومحمص مقرمش على الصاج.",
    orderWrapLink: "خصص ساندوتشك الآن ←",
    tagRedShawarma: "الخبز الأحمر المميز",
    redShawarmaTitle: "شاورما الخبز الأحمر المتبل",
    redShawarmaDesc: "شاورما دجاج طازجة محضرة في الخبز الأحمر الخاص المتبل بخلطة البهارات الأناضولية ومحمرة حتى القرمشة.",
    orderRedShawarmaLink: "اطلب الخبز الأحمر ←",
    tagFriesPhoto: "مقبلات ذهبية",
    friesTitle: "بطاطس مقلية مقرمشة",
    friesDesc: "أصابع بطاطس ذهبية مقلية طازجة ببهاراتنا الخاصة، تقدم ساخنة مع الثومية الغنية والمخلل.",
    orderFriesLink: "أضف بطاطس للطلب ←",
    instaBadge: "الصفحة الرسمية للمطعم",
    instaBioText: "متخصصون في الشاورما على الفحم • مواعيد العمل من 11 صباحاً إلى 4 فجراً • الخبر - التحلية • هاتف: 0501475425",
    instaPosts: "منشور",
    instaFollowers: "متابع",
    viewInstaPostsBtn: "تصفح أكثر من ٣٠ منشور وقصة على إنستغرام",
    menuBadge: "قائمة الطعام والأسعار الرسمية",
    menuTitle: "خيارات الشاورما الأصيلة",
    menuDesc: "تحضر طازجة فور طلبك بخبز لبناني أو صاج أو أحمر. اضغط على أي صنف لتخصيصه (بدون ثوم، بدون مخلل، بدون بطاطس، جبن إضافي)!",
    viewOriginalMenuBtn: "عرض صورة المنيو الأصلي",
    catAll: "جميع الأصناف",
    catSandwiches: "🥪 ساندويشات",
    catArabi: "🍱 بوكسات عربي",
    catPlates: "🍽️ صحون وبطاطس",
    catDrinks: "🥤 مشروبات",
    titleSandwiches: "ساندويشات الشاورما",
    subSandwiches: "خبز لبناني أو صاج",
    metaSandwiches: "خيارات عادي وأحمر وجبن",
    popularRibbon: "الأكثر طلباً",
    topSellerRibbon: "مميز جداً",
    feastRibbon: "وجبة مشبعة",
    tagClassic: "كلاسيك",
    tagCheese: "🧀 بالجبن",
    tagRedBread: "🌶️ خبز أحمر",
    tagCombo: "🌶️ + 🧀 كومبو",
    tagJumbo: "🚀 صاروخ كبير",
    tagJumboCheese: "🧀 صاروخ جبن",
    tagJumboRed: "🌶️ صاروخ أحمر",
    tagSupreme: "🔥 الأقوى مبيعاً",
    addCustomBtn: "+ تخصيص وإضافة للطلب",
    addToTrayBtn: "+ أضف للطلب",
    addBoxBtn: "+ تخصيص وإضافة للطلب",
    descNormal: "شاورما مقطعة طازجة ملفوفة بخبز لبناني أو صاج رقيق مع صوص الثوم والمخلل.",
    descCheese: "شاورما تقليدية غنية مع طبقة جبن شيدر ذائبة تعطي قواماً شهياً للغاية.",
    descRed: "الصنف الأكثر شهرة: خبز أحمر متبل بالبهارات ومحمص مقرمش مع لحم الشاورما الطري.",
    descRedCheese: "التركيبة المثالية: خبز أحمر حار محمص ومحشو بالشاورما وجبن الشيدر الذائب.",
    descSaroukh: "ساندوتش صاروخ بحجم كبير مضاعف مشبع بالكامل مع الثوم والبطاطس المقرمشة.",
    descSaroukhCheese: "صاروخ بحجم كبير مشبع مغطى ومحشو بالجبن الذائب طوال اللفة.",
    descSaroukhRed: "صاروخ بحجم كبير في الخبز الأحمر المتبل، محمص ومقمر على الصاج.",
    descSaroukhRedCheese: "البطل الأثقل والأشهى: صاروخ خبز أحمر محشو بالشاورما والجبن الذائب بالكامل.",
    titleArabi: "بوكسات شاورما عربي للجمعات",
    subArabi: "صناديق من ٦ قطع حتى ٣٠ قطعة",
    metaArabi: "يشمل بطاطس مقلية مقرمشة، ثومية ومخلل",
    arabiBadgeFresh: "الأكثر طلباً للجمعات",
    arabiBoxHeading: "بوكسات الشاورما العربي (من ٦ إلى ٣٠ قطعة)",
    arabiBoxSubheading: "قطع شاورما مقرمشة تقدم مع بطاطس مقلية ساخنة، ثوم كريمي، ومخلل متبل.",
    arabiInstructionsTitle: "اختر حجم بوكس الشاورما العربي:",
    arabiInstructionsDesc: "اضغط على الحجم لمعرفة الأسعار والتخصيص (عادي، بالجبن، خبز أحمر، أو أحمر بالجبن):",
    pSolo: "فردي / شخص واحد",
    pMedium: "وسط",
    pDouble: "بوكس دبل",
    pGathering: "جمعات عائلية",
    pParty: "بوكس حفلات",
    pJumbo: "وليمة كبرى 30 قطعة",
    arabiVarNormal: "عادي",
    arabiVarCheese: "بالجبن",
    arabiVarRed: "المميز 🔥",
    arabiVarRedCheese: "الكومبو الأفضل",
    arabiNameNormal: "شاورما عربي (عادي)",
    arabiNameCheese: "شاورما عربي (بالجبن)",
    arabiNameRed: "شاورما عربي (خبز أحمر)",
    arabiNameRedCheese: "شاورما عربي (أحمر بالجبن)",
    arabiDescNormal: "قطع شاورما مقطعة ومحمصة تقدم في بوكس مع بطاطس مقلية وثوم ومخلل.",
    arabiDescCheese: "قطع شاورما عربي بالجبن الذائب تقدم مع البطاطس الساخنة والثومية.",
    arabiDescRed: "خبزنا الأحمر المميز مقطع لقيمات مع بطاطس مقرمشة وثوم ومخلل.",
    arabiDescRedCheese: "خبز أحمر متبل مع جبن سائل شيدر لأعلى تجربة مذاق في أسطا غازي.",
    toggleTableText: "عرض جدول أسعار البوكسات الكامل (من 6 إلى 30 قطعة)",
    thPieces: "عدد القطع",
    thRegular: "عادي",
    thCheese: "بالجبن",
    thRed: "خبز أحمر",
    thRedCheese: "أحمر بالجبن",
    titlePlates: "صحون شاورما وبطاطس",
    subPlates: "لحم شاورما مقطع بدون خبز",
    metaPlates: "شاورما صافية مع مقبلات",
    descPlate: "صحن وافر من شرائح الشاورما اللذيذة مع الخبز الساخن والبطاطس والثوم والمخلل.",
    descBigPlate: "صحن كبير جداً ولائمي مشبع، مليء بالشاورما مع حصص خبز إضافية وبطاطس كبيرة.",
    descFriesSmall: "أصابع بطاطس مقلية ذهبية ومقرمشة متبلة ببهارات خاصة.",
    descFriesLarge: "كمية كبيرة من البطاطس المقلية الساخنة المقرمشة تكفي للمشاركة.",
    tagPlate: "صحن عادي",
    tagBigFeast: "👑 صحن وليمة كبير",
    tagSide: "صنف جانبي",
    tagLargeSide: "جانبي كبير",
    titleDrinks: "المشروبات المنعشة",
    subDrinks: "مشروبات باردة ومياه",
    metaDrinks: "بارد ومثلج",
    descSoftDrinks: "تشكيلة مشروبات غازية باردة مثلجة (بيبسي، سفن آب، ميرندا، حمضيات، كينزا).",
    descWater: "مياه شرب نقية معبأة ومثلجة.",
    tagChilled: "مثلج",
    tagEssential: "مياه نقية",
    reviewsBadge: "تقييمات وتجارب العملاء الموثقة",
    reviewsTitle: "ماذا يقول زوارنا على قوقل ماب",
    reviewsDesc: "آراء وتجارب حقيقية من عشاق الشاورما وسكان الخبر وزوار تحلية الخبر.",
    googleRevTag: "تقييمات قوقل ماب",
    googleRatingSub: "بناءً على تقييمات قوقل ماب المعتمدة في مدينة الخبر",
    openGmapsBtn: "فتح في خرائط قوقل",
    rfAll: "جميع التقييمات",
    rfMeat: "جودة الشاورما",
    rfRed: "الخبز الأحمر",
    rfLate: "خدمة الفجر",
    rfClean: "نظافة المكان",
    rVerified: "تقييم موثق في قوقل",
    r1Name: "مرشد محلي • مستخدم قوقل",
    r1Body: "\"أسطا غازي أفضل مكان شاورما جربته في الخبر، أتمنى من الجميع تجربته. جودة الشاورما واضحة ونظافة المكان ممتازة جداً وأشكر صاحب المطعم.\"",
    r1Badge1: "⭐ أفضل شاورما في الخبر",
    r1Badge2: "✨ نظافة استثنائية",
    r2Body: "\"صاروخ الخبز الأحمر بالجبن عندهم حكاية ثانية! التتبيلة مضبوطة وما تلقى مثلها في التحلية، والخدمة سريعة والعمال محترمين.\"",
    r2Badge1: "🌶️ صاروخ خبز أحمر",
    r2Badge2: "🧀 عشاق الجبن",
    r3Body: "\"منقذ في أوقات متأخرة من الليل! يفتحون لين الساعة 4 الفجر وجودة الأكل الساعة 2 بالليل مثل عز الظهر، والمطبخ نظيف قدام عينك.\"",
    r3Badge1: "🌙 مفتوح حتى 4 فجراً",
    r3Badge2: "🍟 بطاطس حارة وطازجة",
    r4Body: "\"طلبت بوكس عربي 18 قطعة لجمعة العائلة، الكمية راهية والثومية موزونة والكل أعجبهم تنويع الخبز العادي والأحمر. والأسعار ممتازة!\"",
    r4Badge1: "📦 بوكس عربي 18 قطعة",
    r4Badge2: "💰 سعر ممتاز",
    swipeHint: "اسحب أفقياً على الهاتف لتصفح بقية التقييمات",
    locBadge: "موقعنا في مدينة الخبر",
    locTitle: "تفضل بزيارة أسطا غازي",
    locDesc: "موقع مميز على شارع الملك خالد التجاري في حي التحلية بالخبر، بالقرب من مطعم الطازج.",
    locAddressLabel: "العنوان",
    locAddressText: "8526 طريق الملك خالد، 3148، حي التحلية، الخبر 34717، المملكة العربية السعودية",
    locLandmark: "📍 بجانب مطعم الطازج وحي الأمواج",
    locHoursLabel: "أوقات العمل",
    locHoursText: "السبت إلى الجمعة: 11:00 صباحاً – 4:00 فجراً",
    hoursBadgeOpen: "🟢 مفتوح الآن (يغلق 4:00 فجراً)",
    hoursBadgeClosed: "🔴 مغلق حالياً (يفتح 11:00 ص)",
    locPhoneLabel: "الهاتف والطلبات",
    locPhoneSub: "للطلبات السريعة والاستلام السفري",
    locInstaLabel: "إنستغرام",
    locInstaSub: "تابعنا لأحدث العروض واليوميات",
    getDirectionsBtn: "الاتجاهات في الخريطة",
    callUsBtn: "اتصل 0501475425",
    overlayLoc: "طريق الملك خالد، تحلية الخبر",
    ctaTitle: "مشتهي شاورما أسطا غازي بالخبز الأحمر الحين؟",
    ctaDesc: "اتصل على أسطا غازي أو اطلب مسبقاً عبر واتساب، واستلم طلبك ساخن وطازج أول ما توصل!",
    ctaCall: "اتصل 0501475425",
    ctaWhatsApp: "اطلب عبر واتساب",
    footerTagline: "شاورما أسطا غازي على الفحم • حي التحلية، الخبر",
    mobCall: "اتصال",
    mobOrder: "طلبي",
    trayTitle: "سلة الطلبات الخاصة بك",
    emptyTrayTitle: "سلة طلباتك فارغة حالياً.",
    emptyTraySub: "اضغط على \"+ تخصيص وإضافة للطلب\" على أي ساندوتش أو بوكس لتفصيل وجبتك كما تحب!",
    trayTotalLabel: "المجموع التقديري:",
    traySendWABtn: "إرسال الطلب عبر واتساب (0501475425)",
    trayCallDirectBtn: "أو الاتصال المباشر 0501475425",
    orderNumPrefix: "طلب رقم",
    orderAssignedTitle: "رقم طلبك المميز:",
    orderTypeTitle: "طريقة الاستلام والخدمة",
    optCarPickup: "🚗 استلام بالسيارة",
    optTakeaway: "🛍️ سفري",
    optDineIn: "🍽️ محلي",
    carInfoLabel: "نوع ولون السيارة",
    carPlateLabel: "رقم اللوحة (اختياري)",
    carInfoPlaceholder: "مثال: كامري أبيض / تاهو أسود",
    carPlatePlaceholder: "مثال: ١٢٣٤ أ ب ج",
    carHint: "🚗 خدمة سيارات بطريق الملك خالد: سيوصل فريقنا طلبك الساخن لنافذة سيارتك فور وصولك!",
    origMenuModalTitle: "قائمة طعام شاورما أسطا غازي الأصلية",
    custBreadTitle: "نوع الخبز المفضل",
    custRequired: "مطلوب",
    custGarlicTitle: "صوص الثوم (الثومية)",
    custChooseOne: "اختر واحداً",
    optGarlicNormal: "ثوم عادي (المعتاد)",
    optGarlicExtra: "ثوم زيادة",
    optGarlicNone: "بدون ثوم",
    custPicklesTitle: "المخلل",
    optPicklesWith: "مع مخلل",
    optPicklesNone: "بدون مخلل",
    custFriesTitle: "البطاطس داخل الساندوتش",
    optFriesWith: "مع بطاطس بالداخل",
    optFriesNone: "بدون بطاطس داخل الساندوتش",
    custAddonsTitle: "الصلصات والإضافات الخاصة",
    custOptional: "اختياري",
    addonSpicy: "شطة حارة (سبايسي)",
    addonMolasses: "دبس رمان",
    addonCheese: "جبن شيدر ذائب إضافي (+1 ريال)",
    addonCrispy: "تحمير زيادة على الصاج (مقمر)",
    custNotesTitle: "ملاحظات وتفاصيل خاصة للطلب",
    authSignIn: "تسجيل الدخول",
    authSignUp: "إنشاء حساب",
    authLoginTab: "تسجيل الدخول",
    authRegisterTab: "حساب جديد",
    authFullName: "الاسم الكامل",
    authFullNamePh: "مثال: فيصل العتيبي",
    authPhone: "رقم الجوال",
    authPhonePh: "5X XXX XXXX",
    authPassword: "كلمة المرور",
    authPasswordPh: "٦ خانات على الأقل",
    authRemember: "تذكرني",
    authCarModel: "نوع ولون السيارة (اختياري للاستلام)",
    authCarModelPh: "مثال: كامري أبيض",
    authPlate: "رقم اللوحة (اختياري)",
    authPlatePh: "مثال: أ ب ج ١٢٣٤",
    authLoginBtn: "دخول",
    authCreateBtn: "إنشاء الحساب",
    authLogout: "تسجيل الخروج",
    otpBack: "رجوع",
    otpTitle: "رمز التحقق الأمني",
    otpSubtitle: "تم إرسال رمز تحقق مكوّن من 4 أرقام في رسالة نصية إلى:",
    otpResendIn: "إعادة إرسال الرمز بعد",
    otpResend: "إعادة إرسال الرمز",
    otpVerifyBtn: "تأكيد ومتابعة",
    otpInvalid: "رمز التحقق غير صحيح. يرجى المحاولة مرة أخرى.",
    otpExpired: "انتهت صلاحية الرمز، فضلاً اطلب رمزاً جديداً.",
    otpSentSuccess: "تم إرسال رمز تحقق جديد في رسالة نصية!",
    authProfileTitle: "حسابي الشخصي",
    authProfileSubtitle: "إدارة بيانات الاستلام وسجل الطلبات",
    authSavedVehicle: "سيارة الاستلام المحفوظة",
    authSavedVehicleDesc: "تعبئة تلقائية لبيانات سيارتك عند الطلب",
    authSaveBtn: "حفظ بيانات السيارة",
    authPastOrders: "سجل الطلبات السابقة",
    authNoOrders: "لا توجد طلبات سابقة حتى الآن.",
    authOrderNum: "طلب",
    authDate: "التاريخ",
    authItems: "الأصناف",
    authTotal: "الإجمالي",
    authGuestPrompt: "لديك حساب؟ سجل الدخول لتعبئة بيانات السيارة تلقائياً ومشاهدة طلباتك."
  }
};

let currentLang = 'en'; // 'en' or 'ar'
let currentArabiPcs = 6;
let orderTray = [];

// Current customizer item state
let activeCustomItem = {
  name: '',
  basePrice: 0,
  thumbUrl: '',
  itemType: 'normal',
  qty: 1
};

// Arabi Pricing Matrix (Matches uploaded official menu)
const ARABI_DATA = {
  6:  { normal: 17, cheese: 18, red: 18, redCheese: 19 },
  9:  { normal: 25, cheese: 26, red: 26, redCheese: 27 },
  12: { normal: 34, cheese: 36, red: 36, redCheese: 37 },
  18: { normal: 47, cheese: 49, red: 49, redCheese: 50 },
  24: { normal: 63, cheese: 65, red: 65, redCheese: 66 },
  30: { normal: 75, cheese: 80, red: 80, redCheese: 85 }
};

document.addEventListener('DOMContentLoaded', () => {
  // Check for stored language preference
  const savedLang = localStorage.getItem('usta_ghazi_lang');
  if (savedLang && (savedLang === 'ar' || savedLang === 'en')) {
    setLanguage(savedLang);
  } else {
    updatePageLanguage();
  }

  initLanguageToggle();
  initLiveHours();
  initCategoryNav();
  initReviewFilters();
  initArabiTableToggle();
  initModalListeners();
  initMobileMenu();
  initSubnav();
  initAuth();
  initWhatsAppOrderBtn();
  assignOrderNumber();
});

/* ==========================================================================
   1. BILINGUAL LANGUAGE SWITCHER (EN / AR)
   ========================================================================== */
function initLanguageToggle() {
  const toggleBtn = document.getElementById('langToggleBtn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'en' ? 'ar' : 'en';
      setLanguage(nextLang);
    });
  }
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('usta_ghazi_lang', lang);

  const html = document.documentElement;
  const langText = document.getElementById('langText');
  const langFlag = document.getElementById('langFlag');

  if (lang === 'ar') {
    html.setAttribute('lang', 'ar');
    html.setAttribute('dir', 'rtl');
    if (langText) langText.textContent = 'English';
    if (langFlag) langFlag.textContent = '🇺🇸';
  } else {
    html.setAttribute('lang', 'en');
    html.setAttribute('dir', 'ltr');
    if (langText) langText.textContent = 'العربية';
    if (langFlag) langFlag.textContent = '🇸🇦';
  }

  updatePageLanguage();
  renderTray(); // Re-render cart with localized text
  updateAuthUI(); // Re-render auth labels with localized text
}

function updatePageLanguage() {
  const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // Also refresh the dynamic hours badge and order number display
  initLiveHours();
  if (currentOrderNumber) {
    updateOrderNumberUI(currentOrderNumber);
  }
}

/* ==========================================================================
   2. LIVE OPENING HOURS CHECKER (11:00 AM - 4:00 AM)
   ========================================================================== */
function initLiveHours() {
  const statusDot = document.getElementById('statusDot');
  const liveStatusText = document.getElementById('liveStatusText');
  const hoursPill = document.getElementById('hoursPill');
  const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  const now = new Date();
  const currentHour = now.getHours();
  const isOpen = currentHour >= 11 || currentHour < 4;

  if (isOpen) {
    if (statusDot) statusDot.className = 'status-dot pulsing';
    if (liveStatusText) liveStatusText.textContent = dict.statusOpen;
    if (hoursPill) {
      hoursPill.textContent = dict.hoursBadgeOpen;
      hoursPill.style.background = '#ECFDF5';
      hoursPill.style.color = '#065F46';
    }
  } else {
    if (statusDot) statusDot.className = 'status-dot closed';
    if (liveStatusText) liveStatusText.textContent = dict.statusClosed;
    if (hoursPill) {
      hoursPill.textContent = dict.hoursBadgeClosed;
      hoursPill.style.background = '#FEF2F2';
      hoursPill.style.color = '#991B1B';
    }
  }
}

/* ==========================================================================
   3. SHAWARMA CUSTOMIZATION MODAL (WITHOUT THOUM, WITHOUT PICKLES, ETC.)
   ========================================================================== */
function openShawarmaCustomizer(name, basePrice, thumbUrl, itemType) {
  activeCustomItem = {
    name: name,
    basePrice: basePrice,
    thumbUrl: thumbUrl,
    itemType: itemType || 'normal',
    qty: 1
  };

  const modal = document.getElementById('customizerModal');
  const thumb = document.getElementById('customModalThumb');
  const title = document.getElementById('customModalTitle');
  const basePriceEl = document.getElementById('customModalBasePrice');
  const qtyVal = document.getElementById('customQtyVal');
  const notesInput = document.getElementById('customNotesInput');

  if (thumb) thumb.src = thumbUrl;
  if (title) title.textContent = name;
  if (basePriceEl) basePriceEl.textContent = `${basePrice} SAR`;
  if (qtyVal) qtyVal.textContent = '1';
  if (notesInput) notesInput.value = '';

  // Reset checkboxes
  const cheeseCheck = document.getElementById('addonCheeseCheck');
  const crispyCheck = document.getElementById('addonCrispyCheck');
  if (cheeseCheck) cheeseCheck.checked = false;
  if (crispyCheck) crispyCheck.checked = false;

  // Reset radios to standard defaults
  const lebaneseRadio = document.querySelector('input[name="custBread"][value="Lebanese Bread (خبز لبناني)"]');
  const redBreadRadio = document.querySelector('input[name="custBread"][value="Red Bread (خبز أحمر مميز)"]');
  if (itemType.includes('red') && redBreadRadio) {
    redBreadRadio.checked = true;
  } else if (lebaneseRadio) {
    lebaneseRadio.checked = true;
  }

  const normalGarlic = document.querySelector('input[name="custGarlic"][value="Normal Toum (ثوم عادي)"]');
  if (normalGarlic) normalGarlic.checked = true;

  const withPickles = document.querySelector('input[name="custPickles"][value="With Pickles (مع مخلل)"]');
  if (withPickles) withPickles.checked = true;

  const withFries = document.querySelector('input[name="custFries"][value="With Fries Inside (مع بطاطس)"]');
  if (withFries) withFries.checked = true;

  updateCustomizerTotal();

  if (modal) modal.classList.add('active');
}

function closeShawarmaCustomizer() {
  const modal = document.getElementById('customizerModal');
  if (modal) modal.classList.remove('active');
}

function stepCustomQty(delta) {
  activeCustomItem.qty += delta;
  if (activeCustomItem.qty < 1) activeCustomItem.qty = 1;
  const qtyVal = document.getElementById('customQtyVal');
  if (qtyVal) qtyVal.textContent = activeCustomItem.qty;
  updateCustomizerTotal();
}

function updateCustomizerTotal() {
  const cheeseCheck = document.getElementById('addonCheeseCheck');
  let unitPrice = activeCustomItem.basePrice;
  if (cheeseCheck && cheeseCheck.checked) {
    unitPrice += 1; // 1 SAR for extra cheese
  }

  const total = unitPrice * activeCustomItem.qty;
  const btnText = document.getElementById('customFinalBtnText');
  if (btnText) {
    const isArabic = currentLang === 'ar';
    btnText.textContent = isArabic
      ? `أضف إلى الطلب • ${total} ريال`
      : `Add to Order • ${total} SAR`;
  }
}

function submitCustomizedShawarma() {
  const breadRadio = document.querySelector('input[name="custBread"]:checked');
  const garlicRadio = document.querySelector('input[name="custGarlic"]:checked');
  const picklesRadio = document.querySelector('input[name="custPickles"]:checked');
  const friesRadio = document.querySelector('input[name="custFries"]:checked');

  const cheeseCheck = document.getElementById('addonCheeseCheck');
  const crispyCheck = document.getElementById('addonCrispyCheck');
  const notesInput = document.getElementById('customNotesInput');

  let unitPrice = activeCustomItem.basePrice;
  const customizations = [];

  // Bread
  if (breadRadio) customizations.push(breadRadio.value);

  // Garlic Toum
  if (garlicRadio) {
    if (garlicRadio.value.includes('Without') || garlicRadio.value.includes('بدون')) {
      customizations.push('🚫 No Garlic (بدون ثوم)');
    } else if (garlicRadio.value.includes('Extra') || garlicRadio.value.includes('زيادة')) {
      customizations.push('🧄 Extra Garlic (ثوم زيادة)');
    }
  }

  // Pickles
  if (picklesRadio && (picklesRadio.value.includes('Without') || picklesRadio.value.includes('بدون'))) {
    customizations.push('🥒 No Pickles (بدون مخلل)');
  }

  // Fries Inside
  if (friesRadio && (friesRadio.value.includes('No Fries') || friesRadio.value.includes('بدون بطاطس'))) {
    customizations.push('🍟 No Fries inside (بدون بطاطس داخل اللفة)');
  }

  // Addons (Only Menu Ingredients)
  if (cheeseCheck && cheeseCheck.checked) {
    customizations.push('🧀 Extra Cheese (جبن إضافي)');
    unitPrice += 1;
  }
  if (crispyCheck && crispyCheck.checked) customizations.push('🔥 Extra Crispy (تحمير زيادة)');

  // Special Notes
  const customNotes = notesInput ? notesInput.value.trim() : '';
  if (customNotes) {
    customizations.push(`Note: "${customNotes}"`);
  }

  // Add to order tray
  orderTray.push({
    name: activeCustomItem.name,
    price: unitPrice,
    qty: activeCustomItem.qty,
    customizations: customizations
  });

  closeShawarmaCustomizer();
  renderTray();
  toggleOrderDrawer(); // Open tray to show added item
}

/* ==========================================================================
   4. ARABI BOX SIZE SELECTOR
   ========================================================================== */
function selectArabiSize(pcs) {
  currentArabiPcs = pcs;

  document.querySelectorAll('.piece-pill').forEach(btn => {
    if (parseInt(btn.getAttribute('data-pcs')) === pcs) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const data = ARABI_DATA[pcs];
  if (!data) return;

  const priceNormal = document.getElementById('price-normal');
  const priceCheese = document.getElementById('price-cheese');
  const priceRed = document.getElementById('price-red');
  const priceRedCheese = document.getElementById('price-redcheese');

  if (priceNormal) priceNormal.textContent = data.normal;
  if (priceCheese) priceCheese.textContent = data.cheese;
  if (priceRed) priceRed.textContent = data.red;
  if (priceRedCheese) priceRedCheese.textContent = data.redCheese;
}

function initArabiTableToggle() {
  const toggleBtn = document.getElementById('toggleTableBtn');
  const fullTable = document.getElementById('fullPriceTable');

  if (toggleBtn && fullTable) {
    toggleBtn.addEventListener('click', () => {
      const isHidden = fullTable.style.display === 'none';
      fullTable.style.display = isHidden ? 'block' : 'none';
      const isArabic = currentLang === 'ar';
      toggleBtn.querySelector('span').textContent = isHidden
        ? (isArabic ? 'إخفاء جدول الأسعار الكامل' : 'Hide Full Arabi Price Matrix')
        : (isArabic ? 'عرض جدول أسعار البوكسات الكامل (من 6 إلى 30 قطعة)' : 'Show Full Arabi Price Matrix (6 to 30 pcs)');
    });
  }
}

/* ==========================================================================
   5. DIRECT ADD TO TRAY (FOR SIDES & DRINKS)
   ========================================================================== */
function addToTrayDirect(name, price) {
  const existing = orderTray.find(item => item.name === name && (!item.customizations || item.customizations.length === 0));
  if (existing) {
    existing.qty += 1;
  } else {
    orderTray.push({ name, price, qty: 1, customizations: [] });
  }

  renderTray();
  toggleOrderDrawer();
}

function changeItemQty(index, delta) {
  if (orderTray[index]) {
    orderTray[index].qty += delta;
    if (orderTray[index].qty <= 0) {
      orderTray.splice(index, 1);
    }
  }
  renderTray();
}

function renderTray() {
  const trayList = document.getElementById('trayItemsList');
  const trayCount = document.getElementById('trayCount');
  const mobileTrayCount = document.getElementById('mobileTrayCount');
  const trayFooter = document.getElementById('trayFooter');
  const trayTotalPrice = document.getElementById('trayTotalPrice');
  const isArabic = currentLang === 'ar';

  const totalItems = orderTray.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = orderTray.reduce((sum, item) => sum + (item.price * item.qty), 0);

  if (trayCount) trayCount.textContent = totalItems;
  if (mobileTrayCount) mobileTrayCount.textContent = totalItems;

  if (orderTray.length === 0) {
    if (trayList) {
      trayList.innerHTML = `
        <div class="empty-tray-msg">
          <p>${isArabic ? 'سلة طلباتك فارغة حالياً.' : 'Your order tray is currently empty.'}</p>
          <small>${isArabic ? 'اضغط على "+ تخصيص وإضافة للطلب" لتفصيل وجبتك!' : 'Tap "+ Customize & Order" on any sandwich or Arabi box to tailor your shawarma!'}</small>
        </div>
      `;
    }
    if (trayFooter) trayFooter.style.display = 'none';
    return;
  }

  if (trayFooter) trayFooter.style.display = 'block';
  if (trayTotalPrice) trayTotalPrice.textContent = `${totalPrice} ${isArabic ? 'ريال' : 'SAR'}`;

  if (trayList) {
    trayList.innerHTML = orderTray.map((item, index) => {
      const customNotesHtml = item.customizations && item.customizations.length > 0
        ? `<span class="tray-item-custom-tags">${item.customizations.join(' • ')}</span>`
        : '';

      return `
        <div class="tray-item-row">
          <div class="tray-item-info">
            <strong>${item.name}</strong>
            ${customNotesHtml}
            <span class="tray-item-price">${item.price} ${isArabic ? 'ريال' : 'SAR'} × ${item.qty} = ${item.price * item.qty} ${isArabic ? 'ريال' : 'SAR'}</span>
          </div>
          <div class="tray-item-controls">
            <button class="tray-qty-btn" onclick="changeItemQty(${index}, -1)" aria-label="Decrease">">−</button>
            <span style="font-weight: 800; min-width: 18px; text-align: center;">${item.qty}</span>
            <button class="tray-qty-btn" onclick="changeItemQty(${index}, 1)" aria-label="Increase">+</button>
          </div>
        </div>
      `;
    }).join('');
  }
}

function toggleOrderDrawer() {
  const drawer = document.getElementById('trayDrawer');
  const backdrop = document.getElementById('trayBackdrop');
  if (drawer && backdrop) {
    drawer.classList.toggle('active');
    backdrop.classList.toggle('active');
    if (drawer.classList.contains('active')) {
      populateTrayVehicleIfAvailable();
    }
  }
}

function handleOrderTypeChange(type) {
  const box = document.getElementById('carDetailsBox');
  document.querySelectorAll('.order-type-pill').forEach(pill => {
    const radio = pill.querySelector('input[type="radio"]');
    if (radio && radio.value === type) {
      pill.classList.add('active');
    } else {
      pill.classList.remove('active');
    }
  });

  if (box) {
    box.style.display = type === 'car_pickup' ? 'block' : 'none';
  }
}

/* ==========================================================================
   5.1 UNIQUE SEQUENTIAL ORDER NUMBER SYSTEM
   ========================================================================== */
let currentOrderNumber = null;

async function assignOrderNumber() {
  const saved = sessionStorage.getItem('usta_ghazi_order_num');
  if (saved) {
    currentOrderNumber = parseInt(saved, 10);
    updateOrderNumberUI(currentOrderNumber);
    return;
  }

  try {
    const res = await fetch('/api/next-order-id', { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (data && data.orderNumber) {
        currentOrderNumber = data.orderNumber;
        sessionStorage.setItem('usta_ghazi_order_num', currentOrderNumber.toString());
        updateOrderNumberUI(currentOrderNumber);
        return;
      }
    }
  } catch (e) {
    console.warn('API /api/next-order-id unreachable, falling back to local sequence', e);
  }

  // Resilient fallback for direct file opening (random 5-digit number)
  let nextFallback = Math.floor(10000 + Math.random() * 90000);
  currentOrderNumber = nextFallback;
  sessionStorage.setItem('usta_ghazi_order_num', currentOrderNumber.toString());
  updateOrderNumberUI(currentOrderNumber);
}

function updateOrderNumberUI(num) {
  const isArabic = currentLang === 'ar';
  const prefix = isArabic ? 'طلب رقم #' : 'Order #';

  const trayNumText = document.getElementById('trayOrderNumText');
  if (trayNumText) trayNumText.textContent = `#${num}`;

  const calloutNum = document.getElementById('trayOrderNumCallout');
  if (calloutNum) calloutNum.textContent = `${prefix}${num}`;
}

function initWhatsAppOrderBtn() {
  const sendOrderBtn = document.getElementById('sendWhatsAppOrderBtn');
  const trayToggleBtn = document.getElementById('trayToggleBtn');

  if (trayToggleBtn) {
    trayToggleBtn.addEventListener('click', toggleOrderDrawer);
  }

  if (sendOrderBtn) {
    sendOrderBtn.addEventListener('click', () => {
      if (orderTray.length === 0) return;

      const total = orderTray.reduce((sum, item) => sum + (item.price * item.qty), 0);
      const selectedType = document.querySelector('input[name="orderType"]:checked')?.value || 'car_pickup';
      const carInfo = document.getElementById('carInfoInput')?.value?.trim() || '';
      const carPlate = document.getElementById('carPlateInput')?.value?.trim() || '';
      const orderNumTag = currentOrderNumber ? `#${currentOrderNumber}` : '#58491';

      // 1. ENGLISH VERSION (TOP)
      let typeEn = 'Car Pickup 🚗';
      if (selectedType === 'takeaway') typeEn = 'Takeaway 🛍️';
      if (selectedType === 'dine_in') typeEn = 'Dine-in 🍽️';

      let msgEn = `Hello Usta Ghazi (Al Tahliya),\n\n`;
      msgEn += `🔔 ORDER NUMBER: ${orderNumTag}\n`;
      msgEn += `📋 Service Type: ${typeEn}\n`;
      if (selectedType === 'car_pickup') {
        if (carInfo) msgEn += `🚗 Car Model & Color: ${carInfo}\n`;
        if (carPlate) msgEn += `🔢 Plate Number: ${carPlate}\n`;
      }
      msgEn += `\nOrder Items:\n`;
      orderTray.forEach(item => {
        msgEn += `• ${item.qty}x ${item.name} (${item.price * item.qty} SAR)\n`;
        if (item.customizations && item.customizations.length > 0) {
          msgEn += `  - ${item.customizations.join(', ')}\n`;
        }
      });
      msgEn += `\nEstimated Total: ${total} SAR\n`;
      msgEn += `Please confirm order receipt and preparation time. Thank you!`;

      // 2. ARABIC VERSION (UNDER IT)
      let typeAr = 'استلام بالسيارة 🚗';
      if (selectedType === 'takeaway') typeAr = 'سفري 🛍️';
      if (selectedType === 'dine_in') typeAr = 'محلي 🍽️';

      let msgAr = `السلام عليكم، مطعم شاورما أسطا غازي (فرع تحلية الخبر):\n\n`;
      msgAr += `🔔 رقم الطلب: ${orderNumTag}\n`;
      msgAr += `📋 طريقة الاستلام: ${typeAr}\n`;
      if (selectedType === 'car_pickup') {
        if (carInfo) msgAr += `🚗 نوع ولون السيارة: ${carInfo}\n`;
        if (carPlate) msgAr += `🔢 رقم اللوحة: ${carPlate}\n`;
      }
      msgAr += `\nتفاصيل الطلب:\n`;
      orderTray.forEach(item => {
        msgAr += `• ${item.qty}x ${item.name} (${item.price * item.qty} ريال)\n`;
        if (item.customizations && item.customizations.length > 0) {
          msgAr += `  - ${item.customizations.join('، ')}\n`;
        }
      });
      msgAr += `\nالمجموع التقديري: ${total} ريال\n`;
      msgAr += `فضلاً تأكيد استلام الطلب والوقت المتوقع للجاهزية. شكراً لكم!`;

      // COMBINE: ENGLISH VERSION ON TOP, ARABIC VERSION UNDER IT
      let fullMessage = `━━━━━━━━━━━━━━━━━━━━\n` +
        `🇬🇧 ORDER DETAILS (ENGLISH)\n` +
        `━━━━━━━━━━━━━━━━━━━━\n` +
        `${msgEn}\n\n` +
        `━━━━━━━━━━━━━━━━━━━━\n` +
        `🇸🇦 تفاصيل الطلب (بالعربي)\n` +
        `━━━━━━━━━━━━━━━━━━━━\n` +
        `${msgAr}`;

      // Official Restaurant WhatsApp destination: 0501475425
      const waUrl = `https://wa.me/966501475425?text=${encodeURIComponent(fullMessage)}`;
      window.open(waUrl, '_blank');

      // Record order into User Profile History (if logged in)
      recordOrderHistory({
        orderNum: orderNumTag,
        date: new Date().toLocaleDateString(currentLang === 'ar' ? 'ar-SA' : 'en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
        items: orderTray.map(i => `${i.qty}x ${i.name}`),
        total: total,
        serviceType: selectedType === 'car_pickup' ? 'Car Pickup' : (selectedType === 'takeaway' ? 'Takeaway' : 'Dine-in')
      });

      // Cycle order number for subsequent orders
      sessionStorage.removeItem('usta_ghazi_order_num');
      setTimeout(() => {
        assignOrderNumber();
      }, 1500);
    });
  }
}

/* ==========================================================================
   6. CATEGORY NAVIGATION & REVIEW FILTERS
   ========================================================================== */
function initCategoryNav() {
  const buttons = document.querySelectorAll('.menu-nav-btn');
  const categoryBlocks = document.querySelectorAll('.menu-category-block');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-category');

      if (category === 'all') {
        categoryBlocks.forEach(block => block.style.display = 'block');
      } else {
        categoryBlocks.forEach(block => {
          if (block.getAttribute('data-cat') === category) {
            block.style.display = 'block';
            block.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            block.style.display = 'none';
          }
        });
      }
    });
  });
}

function initReviewFilters() {
  const filterChips = document.querySelectorAll('.filter-chip');
  const reviewCards = document.querySelectorAll('.review-card');

  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const filter = chip.getAttribute('data-filter');

      reviewCards.forEach(card => {
        if (filter === 'all') {
          card.style.display = 'flex';
        } else {
          const tags = card.getAttribute('data-tags') || '';
          if (tags.includes(filter)) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        }
      });
    });
  });
}

/* ==========================================================================
   7. MODALS & MOBILE DRAWER
   ========================================================================== */
function initModalListeners() {
  const openModalBtn = document.getElementById('openMenuModalBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const closeModalBackdrop = document.getElementById('closeModalBackdrop');
  const menuModal = document.getElementById('menuModal');

  function openModal() {
    if (menuModal) menuModal.classList.add('active');
  }

  function closeModal() {
    if (menuModal) menuModal.classList.remove('active');
  }

  if (openModalBtn) openModalBtn.addEventListener('click', openModal);
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (closeModalBackdrop) closeModalBackdrop.addEventListener('click', closeModal);
}

function initMobileMenu() {
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const backdrop = document.getElementById('mobileNavBackdrop');

  function openMobileNav() {
    navMenu.classList.add('active');
    mobileToggle.classList.add('active');
    if (backdrop) backdrop.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  function closeMobileNav() {
    navMenu.classList.remove('active');
    mobileToggle.classList.remove('active');
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });

    if (drawerCloseBtn) {
      drawerCloseBtn.addEventListener('click', closeMobileNav);
    }

    if (backdrop) {
      backdrop.addEventListener('click', closeMobileNav);
    }

    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 992) {
          closeMobileNav();
        }
      });
    });
  }
}

/* ==========================================================================
   SECTION HEADINGS & SCROLLSPY
   ========================================================================== */
function initSubnav() {
  const pills = document.querySelectorAll('.subnav-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });

  const sections = ['hero', 'menu', 'reviews', 'location', 'contact'];
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 130;
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el && el.offsetTop <= scrollPos) {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${sections[i]}`);
        });
        document.querySelectorAll('.subnav-pill').forEach(pill => {
          pill.classList.toggle('active', pill.getAttribute('href') === `#${sections[i]}`);
        });
        break;
      }
    }
  }, { passive: true });
}

/* ==========================================================================
   USER AUTHENTICATION & PROFILE SYSTEM
   ========================================================================== */
let currentUser = null;

function getStoredUsers() {
  try {
    const raw = localStorage.getItem('usta_users');
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveStoredUsers(users) {
  try {
    localStorage.setItem('usta_users', JSON.stringify(users));
  } catch (e) {
    console.error('Error saving users', e);
  }
}

function initAuth() {
  try {
    const savedSession = localStorage.getItem('usta_current_user') || sessionStorage.getItem('usta_current_user');
    if (savedSession) {
      currentUser = JSON.parse(savedSession);
    }
  } catch (e) {
    currentUser = null;
  }
  updateAuthUI();
  initOtpInputs();
}

function updateAuthUI() {
  const authBtn = document.getElementById('authBtn');
  const authBtnLabel = document.getElementById('authBtnLabel');
  const drawerAuthBtn = document.getElementById('drawerAuthBtn');
  const drawerAuthLabel = document.getElementById('drawerAuthLabel');
  const trayBanner = document.getElementById('trayAuthBanner');
  const trayMsg = document.getElementById('trayAuthMsg');
  const trayBtn = document.getElementById('trayAuthActionBtn');

  if (currentUser) {
    const firstName = currentUser.name ? currentUser.name.split(' ')[0] : 'User';
    if (authBtn) {
      authBtn.classList.add('logged-in');
      authBtn.setAttribute('title', currentUser.name);
    }
    if (authBtnLabel) {
      authBtnLabel.textContent = firstName;
    }
    if (drawerAuthBtn) {
      drawerAuthBtn.classList.add('logged-in');
    }
    if (drawerAuthLabel) {
      drawerAuthLabel.textContent = `${firstName} (${currentLang === 'ar' ? 'حسابي' : 'Profile'})`;
    }

    if (trayBanner) {
      trayBanner.classList.add('logged-in');
    }
    if (trayMsg) {
      const msgText = currentLang === 'ar' 
        ? `أهلاً ${firstName} • تم تعبئة بيانات سيارتك`
        : `Logged in as ${firstName} • Vehicle auto-filled`;
      trayMsg.innerHTML = `<span class="auth-icon">✅</span> <span>${msgText}</span>`;
    }
    if (trayBtn) {
      trayBtn.innerHTML = `<span>${currentLang === 'ar' ? 'حسابي' : 'Account'}</span> →`;
      trayBtn.onclick = () => openProfileModal();
    }

    populateTrayVehicleIfAvailable();
  } else {
    if (authBtn) {
      authBtn.classList.remove('logged-in');
      authBtn.removeAttribute('title');
    }
    if (authBtnLabel) {
      authBtnLabel.textContent = currentLang === 'ar' ? 'تسجيل الدخول' : 'Sign In';
    }
    if (drawerAuthBtn) {
      drawerAuthBtn.classList.remove('logged-in');
    }
    if (drawerAuthLabel) {
      drawerAuthLabel.textContent = currentLang === 'ar' ? 'تسجيل الدخول' : 'Sign In';
    }

    if (trayBanner) {
      trayBanner.classList.remove('logged-in');
    }
    if (trayMsg) {
      trayMsg.innerHTML = `<span class="auth-icon">💡</span> <span data-i18n="authGuestPrompt">${currentLang === 'ar' ? 'لديك حساب؟ سجل الدخول لتعبئة بيانات السيارة تلقائياً ومشاهدة طلباتك.' : 'Have an account? Log in to auto-fill car details & track orders.'}</span>`;
    }
    if (trayBtn) {
      trayBtn.innerHTML = `<span data-i18n="authSignIn">${currentLang === 'ar' ? 'تسجيل الدخول' : 'Sign In'}</span> →`;
      trayBtn.onclick = () => openAuthModal('login');
    }
  }
}

function handleAuthBtnClick() {
  if (currentUser) {
    openProfileModal();
  } else {
    openAuthModal('login');
  }
}

function openAuthModal(tab = 'login') {
  const modal = document.getElementById('authModal');
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    switchAuthTab(tab);
    clearAuthAlert();
  }
}

let pendingAuth = null;
let otpTimerInterval = null;
let smsToastTimeout = null;

function normalizeSaudiMobile(phone) {
  if (!phone) return '';
  let cleaned = phone.toString().replace(/[\s\-\+\(\)]/g, '');
  if (cleaned.startsWith('00966')) cleaned = cleaned.slice(5);
  else if (cleaned.startsWith('966')) cleaned = cleaned.slice(3);
  if (cleaned.startsWith('0')) cleaned = cleaned.slice(1);
  return cleaned;
}

function formatSaudiDisplayPhone(num) {
  const norm = normalizeSaudiMobile(num);
  if (norm.length === 9) {
    return `+966 ${norm.slice(0, 2)} ${norm.slice(2, 5)} ${norm.slice(5)}`;
  }
  return `+966 ${norm}`;
}

function closeAuthModal() {
  const modal = document.getElementById('authModal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
  cancelOtpVerification();
}

function switchAuthTab(tab) {
  const loginBtn = document.getElementById('tabLoginBtn');
  const signupBtn = document.getElementById('tabSignupBtn');
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const authTabs = document.getElementById('authTabs');
  const otpStep = document.getElementById('authOtpStep');

  if (authTabs) authTabs.style.display = 'flex';
  if (otpStep) otpStep.style.display = 'none';
  if (otpTimerInterval) clearInterval(otpTimerInterval);
  pendingAuth = null;
  clearAuthAlert();

  if (tab === 'login') {
    if (loginBtn) loginBtn.classList.add('active');
    if (signupBtn) signupBtn.classList.remove('active');
    if (loginForm) loginForm.style.display = 'flex';
    if (signupForm) signupForm.style.display = 'none';
  } else {
    if (loginBtn) loginBtn.classList.remove('active');
    if (signupBtn) signupBtn.classList.add('active');
    if (loginForm) loginForm.style.display = 'none';
    if (signupForm) signupForm.style.display = 'flex';
  }
}

function showAuthAlert(msg, type = 'error') {
  const alert = document.getElementById('authAlert');
  if (alert) {
    alert.style.display = 'flex';
    alert.className = `auth-alert ${type}`;
    alert.textContent = msg;
  }
}

function clearAuthAlert() {
  const alert = document.getElementById('authAlert');
  if (alert) {
    alert.style.display = 'none';
    alert.textContent = '';
  }
}

function showSmsToast(code) {
  const toast = document.getElementById('smsNotificationToast');
  const codeEl = document.getElementById('smsToastCode');
  if (!toast || !codeEl) return;

  codeEl.textContent = code;
  toast.style.display = 'block';

  if (smsToastTimeout) clearTimeout(smsToastTimeout);
  smsToastTimeout = setTimeout(() => {
    hideSmsToast();
  }, 14000);
}

function hideSmsToast(e) {
  if (e) e.stopPropagation();
  const toast = document.getElementById('smsNotificationToast');
  if (toast) toast.style.display = 'none';
  if (smsToastTimeout) clearTimeout(smsToastTimeout);
}

function quickFillOtpFromToast() {
  if (!pendingAuth || !pendingAuth.otpCode) return;
  const digits = pendingAuth.otpCode.split('');
  const inputs = [
    document.getElementById('otp1'),
    document.getElementById('otp2'),
    document.getElementById('otp3'),
    document.getElementById('otp4')
  ];
  inputs.forEach((inp, i) => {
    if (inp) {
      inp.value = digits[i] || '';
      inp.classList.add('filled');
    }
  });
  if (inputs[3]) inputs[3].focus();
  setTimeout(() => {
    const form = document.getElementById('otpForm');
    if (form) form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
  }, 250);
  hideSmsToast();
}

function startOtpVerification(type, payload, targetPhoneFormatted) {
  const code = Math.floor(1000 + Math.random() * 9000).toString();
  pendingAuth = {
    type: type,
    payload: payload,
    otpCode: code,
    targetPhone: targetPhoneFormatted,
    expiresAt: Date.now() + 120000
  };

  const authTabs = document.getElementById('authTabs');
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const otpStep = document.getElementById('authOtpStep');
  const targetPhoneEl = document.getElementById('otpTargetPhone');

  if (authTabs) authTabs.style.display = 'none';
  if (loginForm) loginForm.style.display = 'none';
  if (signupForm) signupForm.style.display = 'none';
  if (otpStep) otpStep.style.display = 'flex';
  if (targetPhoneEl) targetPhoneEl.textContent = targetPhoneFormatted;

  clearAuthAlert();

  const inputs = [
    document.getElementById('otp1'),
    document.getElementById('otp2'),
    document.getElementById('otp3'),
    document.getElementById('otp4')
  ];
  inputs.forEach(inp => {
    if (inp) {
      inp.value = '';
      inp.classList.remove('filled');
    }
  });
  if (inputs[0]) setTimeout(() => inputs[0].focus(), 150);

  startOtpTimer(45);
  showSmsToast(code);
}

function startOtpTimer(seconds = 45) {
  if (otpTimerInterval) clearInterval(otpTimerInterval);
  let timeLeft = seconds;
  const countdownText = document.getElementById('otpCountdownText');
  const countdownSec = document.getElementById('otpCountdownSec');
  const resendBtn = document.getElementById('otpResendBtn');

  if (countdownText) countdownText.style.display = 'inline';
  if (resendBtn) resendBtn.style.display = 'none';
  if (countdownSec) countdownSec.textContent = timeLeft;

  otpTimerInterval = setInterval(() => {
    timeLeft--;
    if (countdownSec) countdownSec.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(otpTimerInterval);
      if (countdownText) countdownText.style.display = 'none';
      if (resendBtn) resendBtn.style.display = 'inline-block';
    }
  }, 1000);
}

function resendOtpCode() {
  if (!pendingAuth) return;
  const newCode = Math.floor(1000 + Math.random() * 9000).toString();
  pendingAuth.otpCode = newCode;
  pendingAuth.expiresAt = Date.now() + 120000;

  startOtpTimer(45);
  showSmsToast(newCode);
  showAuthAlert(translations[currentLang].otpSentSuccess || 'New 4-digit verification code sent via SMS!', 'success');
}

function cancelOtpVerification() {
  if (otpTimerInterval) clearInterval(otpTimerInterval);
  pendingAuth = null;
  const otpStep = document.getElementById('authOtpStep');
  const authTabs = document.getElementById('authTabs');
  if (otpStep) otpStep.style.display = 'none';
  if (authTabs) authTabs.style.display = 'flex';

  const loginBtn = document.getElementById('tabLoginBtn');
  const isLogin = loginBtn && loginBtn.classList.contains('active');
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  if (loginForm) loginForm.style.display = isLogin ? 'flex' : 'none';
  if (signupForm) signupForm.style.display = isLogin ? 'none' : 'flex';
  clearAuthAlert();
  hideSmsToast();
}

function handleOtpSubmit(event) {
  event.preventDefault();
  if (!pendingAuth) return;

  const o1 = document.getElementById('otp1')?.value?.trim() || '';
  const o2 = document.getElementById('otp2')?.value?.trim() || '';
  const o3 = document.getElementById('otp3')?.value?.trim() || '';
  const o4 = document.getElementById('otp4')?.value?.trim() || '';
  const enteredCode = `${o1}${o2}${o3}${o4}`;

  if (enteredCode.length < 4) {
    showAuthAlert(currentLang === 'ar' ? 'فضلاً أدخل كامل رمز التحقق المكون من ٤ أرقام' : 'Please enter the full 4-digit code.', 'error');
    return;
  }

  if (Date.now() > pendingAuth.expiresAt) {
    showAuthAlert(translations[currentLang].otpExpired || 'Code expired. Please click Resend Code.', 'error');
    return;
  }

  if (enteredCode !== pendingAuth.otpCode) {
    showAuthAlert(translations[currentLang].otpInvalid || 'Incorrect verification code. Please try again.', 'error');
    const first = document.getElementById('otp1');
    if (first) {
      first.focus();
      first.select();
    }
    return;
  }

  // Code verified!
  showAuthAlert(currentLang === 'ar' ? 'تم التحقق بنجاح! جاري الدخول...' : 'Verified successfully! Logging in...', 'success');
  if (otpTimerInterval) clearInterval(otpTimerInterval);
  hideSmsToast();

  if (pendingAuth.type === 'login') {
    const user = pendingAuth.payload.user;
    currentUser = user;
    if (pendingAuth.payload.remember) {
      localStorage.setItem('usta_current_user', JSON.stringify(user));
    } else {
      sessionStorage.setItem('usta_current_user', JSON.stringify(user));
    }
  } else if (pendingAuth.type === 'signup') {
    const newUser = pendingAuth.payload.newUser;
    const users = getStoredUsers();
    users.push(newUser);
    saveStoredUsers(users);
    currentUser = newUser;
    localStorage.setItem('usta_current_user', JSON.stringify(newUser));
  }

  pendingAuth = null;

  setTimeout(() => {
    closeAuthModal();
    updateAuthUI();
  }, 650);
}

function handleLoginSubmit(event) {
  event.preventDefault();
  const rawPhone = document.getElementById('loginPhone')?.value?.trim();
  const phone = normalizeSaudiMobile(rawPhone);
  const password = document.getElementById('loginPassword')?.value;
  const remember = document.getElementById('loginRemember')?.checked;

  if (!phone || !password) {
    showAuthAlert(currentLang === 'ar' ? 'فضلاً أدخل رقم الجوال وكلمة المرور' : 'Please enter your phone number and password.', 'error');
    return;
  }

  if (phone.length !== 9 || !phone.startsWith('5')) {
    showAuthAlert(currentLang === 'ar' ? 'رقم الجوال يجب أن يكون ٩ أرقام ويبدأ بـ 5 (مثال: 501234567)' : 'Please enter a valid 9-digit Saudi mobile number starting with 5 (e.g. 501234567).', 'error');
    return;
  }

  const users = getStoredUsers();
  const user = users.find(u => normalizeSaudiMobile(u.phone) === phone && u.password === password);

  if (user) {
    startOtpVerification('login', { user, remember }, formatSaudiDisplayPhone(phone));
  } else {
    showAuthAlert(currentLang === 'ar' ? 'رقم الجوال أو كلمة المرور غير صحيحة.' : 'Invalid phone number or password.', 'error');
  }
}

function handleSignupSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('signupName')?.value?.trim();
  const rawPhone = document.getElementById('signupPhone')?.value?.trim();
  const phone = normalizeSaudiMobile(rawPhone);
  const password = document.getElementById('signupPassword')?.value;
  const carModel = document.getElementById('signupCarModel')?.value?.trim() || '';
  const plateNumber = document.getElementById('signupPlate')?.value?.trim() || '';

  if (!name || !phone || !password) {
    showAuthAlert(currentLang === 'ar' ? 'فضلاً املأ جميع الحقول المطلوبة' : 'Please fill in all required fields.', 'error');
    return;
  }

  if (phone.length !== 9 || !phone.startsWith('5')) {
    showAuthAlert(currentLang === 'ar' ? 'رقم الجوال يجب أن يكون ٩ أرقام ويبدأ بـ 5 (مثال: 501234567)' : 'Please enter a valid 9-digit Saudi mobile number starting with 5 (e.g. 501234567).', 'error');
    return;
  }

  if (password.length < 6) {
    showAuthAlert(currentLang === 'ar' ? 'كلمة المرور يجب أن تكون ٦ خانات على الأقل' : 'Password must be at least 6 characters.', 'error');
    return;
  }

  const users = getStoredUsers();
  if (users.some(u => normalizeSaudiMobile(u.phone) === phone)) {
    showAuthAlert(currentLang === 'ar' ? 'يوجد حساب مسجل بهذا الرقم مسبقاً.' : 'An account with this phone number already exists.', 'error');
    return;
  }

  const newUser = {
    id: 'u_' + Date.now(),
    name: name,
    phone: formatSaudiDisplayPhone(phone),
    password: password,
    carModel: carModel,
    plateNumber: plateNumber,
    createdAt: new Date().toISOString(),
    orders: []
  };

  startOtpVerification('signup', { newUser }, formatSaudiDisplayPhone(phone));
}

function initOtpInputs() {
  const inputs = [
    document.getElementById('otp1'),
    document.getElementById('otp2'),
    document.getElementById('otp3'),
    document.getElementById('otp4')
  ];

  inputs.forEach((input, index) => {
    if (!input || input.dataset.initialized) return;
    input.dataset.initialized = 'true';

    input.addEventListener('input', () => {
      const val = input.value.replace(/\D/g, '');
      input.value = val ? val.slice(-1) : '';
      if (input.value) {
        input.classList.add('filled');
        if (index < inputs.length - 1 && inputs[index + 1]) {
          inputs[index + 1].focus();
        } else {
          const allFilled = inputs.every(inp => inp && inp.value);
          if (allFilled) {
            const form = document.getElementById('otpForm');
            if (form) form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
          }
        }
      } else {
        input.classList.remove('filled');
      }
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !input.value && index > 0 && inputs[index - 1]) {
        inputs[index - 1].focus();
      }
    });

    input.addEventListener('paste', (e) => {
      e.preventDefault();
      const pasted = (e.clipboardData || window.clipboardData).getData('text');
      const digits = pasted.replace(/\D/g, '').slice(0, 4);
      if (digits) {
        for (let i = 0; i < digits.length; i++) {
          if (inputs[i]) {
            inputs[i].value = digits[i];
            inputs[i].classList.add('filled');
          }
        }
        if (digits.length === 4) {
          if (inputs[3]) inputs[3].focus();
          const form = document.getElementById('otpForm');
          if (form) form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
        } else if (inputs[digits.length]) {
          inputs[digits.length].focus();
        }
      }
    });
  });
}

function openProfileModal() {
  if (!currentUser) return;
  const modal = document.getElementById('profileModal');
  if (!modal) return;

  const avatar = document.getElementById('profileAvatar');
  const nameEl = document.getElementById('profileName');
  const phoneEl = document.getElementById('profilePhone');
  const carInput = document.getElementById('profileCarModel');
  const plateInput = document.getElementById('profilePlate');
  const ordersContainer = document.getElementById('profileOrdersList');

  if (avatar) avatar.textContent = currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U';
  if (nameEl) nameEl.textContent = currentUser.name || 'Customer';
  if (phoneEl) phoneEl.textContent = currentUser.phone || '';
  if (carInput) carInput.value = currentUser.carModel || '';
  if (plateInput) plateInput.value = currentUser.plateNumber || '';

  if (ordersContainer) {
    ordersContainer.innerHTML = '';
    const orders = currentUser.orders || [];
    if (orders.length === 0) {
      ordersContainer.innerHTML = `<div class="no-orders-hint">${currentLang === 'ar' ? 'لا توجد طلبات سابقة حتى الآن.' : 'No previous orders found yet.'}</div>`;
    } else {
      orders.forEach(ord => {
        const div = document.createElement('div');
        div.className = 'order-history-card';
        div.innerHTML = `
          <div class="history-card-top">
            <span class="history-card-num">${ord.orderNum || '#Order'}</span>
            <span class="history-card-date">${ord.date || ''}</span>
          </div>
          <div class="history-card-items">${Array.isArray(ord.items) ? ord.items.join(' • ') : ord.items}</div>
          <div class="history-card-total">${ord.total} ${currentLang === 'ar' ? 'ريال' : 'SAR'} (${ord.serviceType || 'Pickup'})</div>
        `;
        ordersContainer.appendChild(div);
      });
    }
  }

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeProfileModal() {
  const modal = document.getElementById('profileModal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
}

function handleSaveProfileVehicle(event) {
  event.preventDefault();
  if (!currentUser) return;

  const carModel = document.getElementById('profileCarModel')?.value?.trim() || '';
  const plate = document.getElementById('profilePlate')?.value?.trim() || '';

  currentUser.carModel = carModel;
  currentUser.plateNumber = plate;

  // Update in stored users
  const users = getStoredUsers();
  const idx = users.findIndex(u => u.id === currentUser.id);
  if (idx !== -1) {
    users[idx].carModel = carModel;
    users[idx].plateNumber = plate;
    saveStoredUsers(users);
  }
  localStorage.setItem('usta_current_user', JSON.stringify(currentUser));

  populateTrayVehicleIfAvailable();

  alert(currentLang === 'ar' ? 'تم حفظ بيانات سيارة الاستلام بنجاح!' : 'Pickup vehicle details saved successfully!');
}

function handleLogout() {
  currentUser = null;
  localStorage.removeItem('usta_current_user');
  sessionStorage.removeItem('usta_current_user');
  closeProfileModal();
  updateAuthUI();
}

function populateTrayVehicleIfAvailable() {
  if (currentUser) {
    const carInput = document.getElementById('carInfoInput');
    const plateInput = document.getElementById('carPlateInput');
    if (carInput && !carInput.value && currentUser.carModel) {
      carInput.value = currentUser.carModel;
    }
    if (plateInput && !plateInput.value && currentUser.plateNumber) {
      plateInput.value = currentUser.plateNumber;
    }
  }
}

function recordOrderHistory(orderRecord) {
  if (currentUser) {
    if (!currentUser.orders) currentUser.orders = [];
    currentUser.orders.unshift(orderRecord);

    const users = getStoredUsers();
    const idx = users.findIndex(u => u.id === currentUser.id);
    if (idx !== -1) {
      users[idx].orders = currentUser.orders;
      saveStoredUsers(users);
    }
    localStorage.setItem('usta_current_user', JSON.stringify(currentUser));
  }
}

function togglePasswordVisibility(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const isPassword = input.type === 'password';
  input.type = isPassword ? 'text' : 'password';
  btn.innerHTML = isPassword 
    ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.44-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/></svg>`
    : `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`;
}




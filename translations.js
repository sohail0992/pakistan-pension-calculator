// Translations embedded directly as JavaScript object (no fetch needed)
const embeddedTranslations = {
  "en": {
    "currentAge": "Current Age",
    "retireAge": "Retirement Age",
    "deathAge": "Life Expectancy (Age)",
    "payoutPeriod": "Payout Period",
    "stepUp": "Step-up Saving Yearly (%)",
    "inflation": "Expected Inflation (%)",
    "inflationHint": "(Official: 9-12%)",
    "monthlyPayout": "Monthly Payout at Retirement (PKR)",
    "monthlyContribution": "Monthly Contribution (PKR)",
    "startingAge": "Starting Age",
    "retirementAge": "Retirement Age",
    "payoutMonths": "Number of Payout Months",
    "monthlyPayoutAmount": "After Retirement Monthly Payout",
    "potAtRetirement": "Pot at Retirement",
    "totalContributions": "Total Contributions",
    "projectedValue": "Projected Value",
    "projectedValueNote": "(est. based on Meezan GOKP performance)",
    "monthlyContributionLabel": "Monthly Contribution:",
    "totalGrowth": "Total Growth",
    "myPensionPlan": "My Pension Plan",
    "pensionPlanner": "Pension Planner",
    "shareOnWhatsApp": "Share on WhatsApp",
    "shareViaEmail": "Share via Email",
    "shareOnTwitter": "Share on Twitter",
    "copyImage": "Copy Image",
    "dataAligned": "Data aligned with",
    "viewPerformance": "View Performance",
    "inflationLabel": "Inflation:",
    "lifeExpectancyLabel": "Life Expectancy:",
    "estLongTermAvg": "est. long-term avg",
    "months": "months",
    "years": "years",
    "year": "year",
    "fromFundProfit": "(From fund profit)",
    "lifeExpectancyTooltip": "Life Expectancy:",
    "lifeExpectancyDesc": "Pakistan's average life expectancy is approximately",
    "lifeExpectancyNote": "This determines how long you'll receive pension payouts after retirement. Adjust based on your health and family history.",
    "stepUpTitle": "How Step-Up Works:",
    "stepUpNormal": "Normal",
    "stepUpWithInflation": "With Inflation",
    "inflationImpactTitle": "Inflation Impact Warning:",
    "sharePlanTitle": "Plan your retirement with Pension Planner!",
    "emailSubject": "My Pension Plan - Pension Planner",
    "emailImageNote": "Image attached: pension-plan.png",
    "hashtags": "#PensionPlanner",
    "footerDataAligned": "Data aligned with",
    "visitWebsite": "Visit Website",
    "howToInvest": "How to Invest",
    "footerViewPerformance": "View Performance",
    "adjustForInflation": "Adjust contributions for inflation",
    "inflationAdjustTitle": "Inflation Impact on Your Retirement",
    "birdStepRetireAge": "Enter your desired retirement age. This is when you want to stop working and start receiving your pension.",
    "birdStep1": "Enter your current age. This is where you begin your retirement planning journey.",
    "birdStep1Payout": "Enter your desired monthly retirement income. This is what you want to receive each month after retirement.",
    "birdStep2": "This is set to Pakistan's average life expectancy (~75 years), but you can adjust it based on your health and family history.",
    "birdStep3": "Here's your monthly savings goal! The calculator figured this out based on your desired payout and retirement timeline.",
    "birdCalculation": "Here's the magic! 💫\n\nYou'll save {monthlyContribution} × {totalMonths} months = Total contributions\n\nThen the fund's {returnRate} return rate multiplies everything through compound growth!\n\nThat's how your money grows! 🚀",
    "pageTitle": "Pension Planner",
    "languageSwitcherTitle": "Language",
    "explanationToggle": "📖 How Your Retirement Calculation Works",
    "explanationIntroText": "This tool is designed for private sector professionals to plan their own voluntary pension. If you have a specific goal, such as wanting {monthlyPayout} every month after you stop working, this roadmap shows exactly how the math determines the path to get there.",
    "explanationTitle1": "1. Setting Your Goal",
    "explanationText1": "You define your lifestyle by adjusting your personal data:",
    "explanationList1": "<li><strong>Your Timeline:</strong> You enter your current age of {currentAge} and your desired retirement age of {retireAge}.</li><li><strong>Life Expectancy:</strong> You can adjust how long you expect the fund to last, such as {deathAge} years.</li><li><strong>Step-up Savings:</strong> To match your career growth in the private sector, you can increase your monthly contribution by {stepUpPercent}% every year.</li>",
    "explanationTitle2": "2. The Growth Journey",
    "explanationText2": "While you focus on your career, the tool calculates your fund's progress through two main stages:",
    "explanationList2": "<li><strong>Total Contributions:</strong> We add up every monthly payment you make over {years} years, including your yearly increases. For this plan, your total out-of-pocket investment is {totalContributions}.</li><li><strong>Fund Performance:</strong> Your money grows at an estimated 12.5% annual return based on the long term average of the Meezan GOKP Pension Fund.</li><li><strong>Monthly Compounding:</strong> Every month, your balance grows using the formula: <strong>New Balance = (Old Balance + Your Contribution) × 1.0104</strong>.</li>",
    "explanationTitle3": "3. Your Final Result",
    "explanationText3": "At retirement, your Projected Value is the total pot of money available to you.",
    "explanationList3": "<li><strong>The Total Pot:</strong> By age {retireAge}, your fund is projected to reach {finalPot}.</li><li><strong>The Profit:</strong> Of that total, {totalGrowth} is pure growth generated by the investment performance.</li><li><strong>Monthly Income:</strong> This sum is converted into a steady monthly payout. Based on your settings, you would receive {monthlyPayout} every month for {payoutMonths} months or {payoutYears} years.</li>",
    "explanationDisclaimerTitle": "Important Disclaimer",
    "explanationDisclaimerText": "<strong>Personal Research and Non Liability Notice</strong><br>This tool is a product of my personal research specifically for the voluntary private sector and is for educational and illustrative purposes only.",
    "explanationDisclaimerList": "<li><strong>Projections Only:</strong> These figures are estimates based on historical fund performance and are not a guarantee of future results.</li><li><strong>No Liability:</strong> I am not responsible for any financial losses, damages, or real world decisions made based on these calculations.</li><li><strong>Consult an Expert:</strong> This is not professional financial advice. Please consult a certified financial advisor before making any investment commitments.</li>"
  },
  "ur": {
    "currentAge": "موجودہ عمر",
    "retireAge": "ریٹائرمنٹ کی عمر",
    "deathAge": "متوقع زندگی (عمر)",
    "payoutPeriod": "ادائیگی کی مدت",
    "stepUp": "سالانہ بچت میں اضافہ (%)",
    "inflation": "متوقع افراط زر (%)",
    "inflationHint": "(سرکاری: 9-12%)",
    "monthlyPayout": "ریٹائرمنٹ پر ماہانہ ادائیگی (PKR)",
    "monthlyContribution": "ماہانہ شراکت (PKR)",
    "startingAge": "شروع کی عمر",
    "retirementAge": "ریٹائرمنٹ کی عمر",
    "payoutMonths": "ادائیگی کے مہینوں کی تعداد",
    "monthlyPayoutAmount": "ریٹائرمنٹ کے بعد ماہانہ ادائیگی",
    "potAtRetirement": "ریٹائرمنٹ پر رقم",
    "totalContributions": "کل شراکتیں",
    "projectedValue": "متوقع قیمت",
    "projectedValueNote": "(Meezan GOKP کی کارکردگی پر مبنی تخمینہ)",
    "monthlyContributionLabel": "ماہانہ شراکت:",
    "totalGrowth": "کل اضافہ",
    "myPensionPlan": "میرا پنشن پلان",
    "pensionPlanner": "پنشن پلانر",
    "shareOnWhatsApp": "واٹس ایپ پر شیئر کریں",
    "shareViaEmail": "ای میل کے ذریعے شیئر کریں",
    "shareOnTwitter": "ٹویٹر پر شیئر کریں",
    "copyImage": "تصویر کاپی کریں",
    "dataAligned": "ڈیٹا کے ساتھ منسلک",
    "viewPerformance": "کارکردگی دیکھیں",
    "inflationLabel": "افراط زر:",
    "lifeExpectancyLabel": "متوقع زندگی:",
    "estLongTermAvg": "طویل مدتی اوسط کا تخمینہ",
    "months": "مہینے",
    "years": "سال",
    "year": "سال",
    "fromFundProfit": "(فنڈ کے منافع سے)",
    "lifeExpectancyTooltip": "متوقع زندگی:",
    "lifeExpectancyDesc": "پاکستان کی اوسط متوقع زندگی تقریباً",
    "lifeExpectancyNote": "یہ طے کرتا ہے کہ ریٹائرمنٹ کے بعد آپ کتنی دیر تک پنشن کی ادائیگی وصول کریں گے۔ اپنی صحت اور خاندانی تاریخ کی بنیاد پر ایڈجسٹ کریں۔",
    "stepUpTitle": "اضافہ کیسے کام کرتا ہے:",
    "stepUpNormal": "عام",
    "stepUpWithInflation": "افراط زر کے ساتھ",
    "inflationImpactTitle": "افراط زر کے اثرات کی وارننگ:",
    "sharePlanTitle": "پنشن پلانر کے ساتھ اپنی ریٹائرمنٹ کی منصوبہ بندی کریں!",
    "emailSubject": "میرا پنشن پلان - پنشن پلانر",
    "emailImageNote": "تصویر منسلک: pension-plan.png",
    "hashtags": "#پنشن_پلانر",
    "footerDataAligned": "ڈیٹا کے ساتھ منسلک",
    "visitWebsite": "ویب سائٹ ملاحظہ کریں",
    "howToInvest": "کیسے سرمایہ کاری کریں",
    "footerViewPerformance": "کارکردگی دیکھیں",
    "adjustForInflation": "شراکتوں کو افراط زر کے لیے ایڈجسٹ کریں (خریداری قوت برقرار رکھیں)",
    "inflationAdjustTitle": "آپ کی ریٹائرمنٹ پر افراط زر کا اثر",
    "birdStepRetireAge": "اپنی مطلوبہ ریٹائرمنٹ کی عمر درج کریں۔ یہ وہ عمر ہے جب آپ کام کرنا بند کرنا چاہتے ہیں اور اپنی پنشن وصول کرنا شروع کرنا چاہتے ہیں۔",
    "birdStep1": "اپنی موجودہ عمر درج کریں۔ یہ وہ جگہ ہے جہاں آپ اپنی ریٹائرمنٹ کی منصوبہ بندی کا سفر شروع کرتے ہیں۔",
    "birdStep1Payout": "اپنی مطلوبہ ماہانہ ریٹائرمنٹ آمدنی درج کریں۔ یہ وہ رقم ہے جو آپ ریٹائرمنٹ کے بعد ہر مہینہ وصول کرنا چاہتے ہیں۔",
    "birdStep2": "یہ پاکستان کی اوسط متوقع عمر (~75 سال) پر سیٹ ہے، لیکن آپ اپنی صحت اور خاندانی تاریخ کی بنیاد پر اسے ایڈجسٹ کر سکتے ہیں۔",
    "birdStep3": "یہ آپ کا ماہانہ بچت کا ہدف ہے! کیلکولیٹر نے یہ آپ کی مطلوبہ ادائیگی اور ریٹائرمنٹ کی ٹائم لائن کی بنیاد پر نکالا ہے۔",
    "birdCalculation": "یہ جادو ہے! 💫\n\nآپ {monthlyContribution} × {totalMonths} مہینے = کل شراکتیں بچائیں گے\n\nپھر فنڈ کی {returnRate} واپسی کی شرح مرکب نمو کے ذریعے ہر چیز کو ضرب دیتی ہے!\n\nیہی طریقہ ہے جس سے آپ کا پیسہ بڑھتا ہے! 🚀",
    "pageTitle": "پنشن پلانر",
    "languageSwitcherTitle": "زبان",
    "explanationToggle": "📖 حساب کیسے کام کرتے ہیں",
    "explanationIntroText": "یہ ٹول پرائیویٹ سیکٹر کے پیشہ ور افراد کے لیے اپنی رضاکارانہ پنشن کی منصوبہ بندی کرنے کے لیے ڈیزائن کیا گیا ہے۔ اگر آپ کا ایک مخصوص مقصد ہے، جیسے کام چھوڑنے کے بعد ہر مہینہ {monthlyPayout} چاہتے ہیں، تو یہ روڈ میپ بالکل دکھاتا ہے کہ حساب کتاب کیسے وہاں پہنچنے کا راستہ طے کرتا ہے۔",
    "explanationTitle1": "1. اپنے مقصد کی ترتیب",
    "explanationText1": "آپ اپنی ذاتی ڈیٹا کو ایڈجسٹ کرکے اپنی طرز زندگی کی وضاحت کرتے ہیں:",
    "explanationList1": "<li><strong>آپ کا ٹائم لائن:</strong> آپ اپنی موجودہ عمر {currentAge} اور اپنی مطلوبہ ریٹائرمنٹ کی عمر {retireAge} درج کرتے ہیں۔</li><li><strong>امید زندگی:</strong> آپ ایڈجسٹ کر سکتے ہیں کہ آپ فنڈ کو کتنی دیر تک چلنے کی توقع رکھتے ہیں، جیسے {deathAge} سال۔</li><li><strong>اضافہ بچت:</strong> پرائیویٹ سیکٹر میں اپنی کیریئر کی نمو سے میل کھانے کے لیے، آپ اپنی ماہانہ شراکت کو ہر سال {stepUpPercent}% بڑھا سکتے ہیں۔</li>",
    "explanationTitle2": "2. نمو کا سفر",
    "explanationText2": "جب آپ اپنے کیریئر پر توجہ دیتے ہیں، تو ٹول دو اہم مراحل کے ذریعے آپ کے فنڈ کی پیشرفت کا حساب لگاتا ہے:",
    "explanationList2": "<li><strong>کل شراکتیں:</strong> ہم {years} سالوں میں آپ کی ہر ماہانہ ادائیگی کو جمع کرتے ہیں، آپ کے سالانہ اضافوں سمیت۔ اس منصوبے کے لیے، آپ کی کل جیب سے سرمایہ کاری {totalContributions} ہے۔</li><li><strong>فنڈ کی کارکردگی:</strong> آپ کا پیسہ المیزان GOKP پنشن فنڈ کے طویل مدتی اوسط پر مبنی تخمینی 12.5% سالانہ واپسی پر بڑھتا ہے۔</li><li><strong>ماہانہ مرکب:</strong> ہر مہینہ، آپ کا بیلنس فارمولا استعمال کرتے ہوئے بڑھتا ہے: <strong>نیا بیلنس = (پرانے بیلنس + آپ کی شراکت) × 1.0104</strong>۔</li>",
    "explanationTitle3": "3. آپ کا حتمی نتیجہ",
    "explanationText3": "ریٹائرمنٹ پر، آپ کی متوقع قیمت آپ کے لیے دستیاب رقم کا کل پوٹ ہے۔",
    "explanationList3": "<li><strong>کل پوٹ:</strong> {retireAge} سال کی عمر تک، آپ کے فنڈ کے {finalPot} تک پہنچنے کا تخمینہ لگایا گیا ہے۔</li><li><strong>منافع:</strong> اس کل میں سے، {totalGrowth} سرمایہ کاری کی کارکردگی سے پیدا ہونے والی خالص نمو ہے۔</li><li><strong>ماہانہ آمدنی:</strong> یہ رقم ایک مستحکم ماہانہ ادائیگی میں تبدیل ہوتی ہے۔ آپ کی ترتیبات کی بنیاد پر، آپ کو {payoutMonths} مہینے یا {payoutYears} سال کے لیے ہر مہینہ {monthlyPayout} ملے گا۔</li>",
    "explanationDisclaimerTitle": "اہم ڈس کلیمر",
    "explanationDisclaimerText": "<strong>ذاتی تحقیق اور غیر ذمہ داری کا نوٹس</strong><br>یہ ٹول میری ذاتی تحقیق کا نتیجہ ہے خاص طور پر رضاکارانہ پرائیویٹ سیکٹر کے لیے اور صرف تعلیمی اور وضاحتی مقاصد کے لیے ہے۔",
    "explanationDisclaimerList": "<li><strong>صرف تخمینے:</strong> یہ اعداد و شمار تاریخی فنڈ کی کارکردگی پر مبنی تخمینے ہیں اور مستقبل کے نتائج کی ضمانت نہیں ہیں۔</li><li><strong>کوئی ذمہ داری نہیں:</strong> میں ان حسابوں کی بنیاد پر کسی بھی مالی نقصانات، نقصانات، یا حقیقی دنیا کے فیصلوں کے لیے ذمہ دار نہیں ہوں۔</li><li><strong>ماہر سے مشورہ کریں:</strong> یہ پیشہ ورانہ مالی مشورہ نہیں ہے۔ براہ کرم کوئی سرمایہ کاری کا عہد کرنے سے پہلے ایک سرٹیفائیڈ مالی مشیر سے مشورہ کریں۔</li>"
  },
  "ps": {
    "currentAge": "اوسنی عمر",
    "retireAge": "تقاعد عمر",
    "deathAge": "د ژوند تمنا (عمر)",
    "payoutPeriod": "د تادیاتو موده",
    "stepUp": "کلنی سپما زیاتوالی (%)",
    "inflation": "تمنا شوی تورم (%)",
    "inflationHint": "(رسمي: 9-12%)",
    "monthlyPayout": "په تقاعد کې میاشتنی تادیات (PKR)",
    "monthlyContribution": "میاشتنی ونډه (PKR)",
    "startingAge": "د پیل عمر",
    "retirementAge": "د تقاعد عمر",
    "payoutMonths": "د تادیاتو میاشتو شمیر",
    "monthlyPayoutAmount": "د تقاعد وروسته میاشتنی تادیات",
    "potAtRetirement": "په تقاعد کې پیسې",
    "totalContributions": "ټول ونډې",
    "projectedValue": "تمنا شوی ارزښت",
    "projectedValueNote": "(د Meezan GOKP کارکردګۍ پر بنسټ اټکل)",
    "monthlyContributionLabel": "میاشتنی ونډه:",
    "totalGrowth": "ټول زیاتوالی",
    "myPensionPlan": "زما د تقاعد پلان",
    "pensionPlanner": "د تقاعد پلان جوړونکی",
    "shareOnWhatsApp": "په واتساپ کې شریک کړئ",
    "shareViaEmail": "په بریښنالیک کې شریک کړئ",
    "shareOnTwitter": "په ټویټر کې شریک کړئ",
    "copyImage": "انځور کاپي کړئ",
    "dataAligned": "د ډیټا سره تړل شوی",
    "viewPerformance": "کارکردګۍ وګورئ",
    "inflationLabel": "تورم:",
    "lifeExpectancyLabel": "د ژوند تمنا:",
    "estLongTermAvg": "د اوږدې مودې اوسط اټکل",
    "months": "میاشتې",
    "years": "کالونه",
    "year": "کال",
    "fromFundProfit": "(د فند ګټې څخه)",
    "lifeExpectancyTooltip": "د ژوند تمنا:",
    "lifeExpectancyDesc": "د پاکستان اوسط د ژوند تمنا نږدې",
    "lifeExpectancyNote": "دا ټاکي چې د تقاعد وروسته تاسو به څومره وخت د تقاعد تادیات ترلاسه کوئ. د خپل روغتیا او کورنۍ تاریخ پر بنسټ تنظیم کړئ.",
    "stepUpTitle": "زیاتوالی څنګه کار کوي:",
    "stepUpNormal": "عادي",
    "stepUpWithInflation": "د تورم سره",
    "inflationImpactTitle": "د تورم اغیزو خبرتیا:",
    "sharePlanTitle": "د تقاعد پلان جوړونکی سره خپل تقاعد پلان وکړئ!",
    "emailSubject": "زما د تقاعد پلان - د تقاعد پلان جوړونکی",
    "emailImageNote": "انځور ضمیمه: pension-plan.png",
    "hashtags": "#د_تقاعد_پلان",
    "footerDataAligned": "د ډیټا سره تړل شوی",
    "visitWebsite": "ویب پاڼه وګورئ",
    "howToInvest": "څنګه پانګه اچونه وکړئ",
    "footerViewPerformance": "کارکردګۍ وګورئ",
    "adjustForInflation": "ونډې د افراط زر لپاره تنظیم کړئ (د پیرودلو وړتیا ساتل)",
    "inflationAdjustTitle": "ستاسو د تقاعد پر تورم اغیز",
    "birdStepRetireAge": "خپل غوښتل شوی د تقاعد عمر ولیکئ. دا هغه وخت دی چې تاسو کار کول بند کول غواړئ او خپل تقاعد ترلاسه کول پیل کړئ.",
    "birdStep1": "خپل اوسنی عمر ولیکئ. دا هغه ځای دی چیرې چې تاسو د خپل تقاعد پلان سفر پیل کوئ.",
    "birdStep1Payout": "خپل غوښتل شوی میاشتنی تقاعد عاید ولیکئ. دا هغه پیسې دي چې تاسو د تقاعد وروسته هر میاشت ترلاسه کول غواړئ.",
    "birdStep2": "دا د پاکستان د اوسط د ژوند تمنا (~75 کلونه) تنظیم شوی دی، مګر تاسو کولی شئ د خپل روغتیا او کورنۍ تاریخ پر بنسټ یې تنظیم کړئ.",
    "birdStep3": "دا ستاسو میاشتنی سپما موخه ده! محاسبه کوونکي دا ستاسو د غوښتل شوي تادیاتو او د تقاعد وخت پر بنسټ محاسبه کړی.",
    "birdCalculation": "دا جادو دی! 💫\n\nتاسو به {monthlyContribution} × {totalMonths} میاشتې = ټول ونډې خوندي کړئ\n\nبیا د فند {returnRate} بیرته راګرځېدل د مرکب ودې له لارې هرڅه ضرب کوي!\n\nدا هغه لاره ده چې ستاسو پیسې وده کوي! 🚀",
    "pageTitle": "د تقاعد پلان جوړونکی",
    "languageSwitcherTitle": "ژبه",
    "explanationToggle": "📖 محاسبه څنګه کار کوي",
    "explanationIntroText": "دا وسیله د پرایویټ سیکټر د مسلکي کسانو لپاره ډیزاین شوې ده چې خپل رضاکارانه تقاعد پلان وکړي۔ که تاسو یو ځانګړی موخه لرئ، لکه د کار پرېښودو وروسته هر میاشت {monthlyPayout} غواړئ، نو دا لارښود بالکل ښیي چې شمیرې څنګه د هغه لارې ټاکي۔",
    "explanationTitle1": "1. د ستاسو موخې تنظیمول",
    "explanationText1": "تاسو د خپل شخصي ډیټا تنظیمولو سره خپل ژوندانه تعریف کوئ:",
    "explanationList1": "<li><strong>ستاسو وخت:</strong> تاسو خپل اوسنی عمر {currentAge} او خپل غوښتل شوی تقاعد عمر {retireAge} ولیکئ۔</li><li><strong>د ژوند تمنا:</strong> تاسو کولی شئ تنظیم کړئ چې تاسو فند څومره وخت دوام کولو تمنا لرئ، لکه {deathAge} کلونه۔</li><li><strong>د زیاتوالي سپما:</strong> د پرایویټ سیکټر کې د خپل مسلک د ودې سره سمون لپاره، تاسو کولی شئ خپل میاشتنی ونډه هر کال {stepUpPercent}% زیات کړئ۔</li>",
    "explanationTitle2": "2. د ودې سفر",
    "explanationText2": "کله چې تاسو خپل مسلک باندې تمرکز کوئ، وسیله د دوو اصلي پړاوونو له لارې ستاسو د فند پرمختګ محاسبه کوي:",
    "explanationList2": "<li><strong>ټول ونډې:</strong> موږ د {years} کلونو په اوږدو کې ستاسو هر میاشتنی تادیات جمع کوو، د ستاسو کلني زیاتوالي په ګډون۔ د دې پلان لپاره، ستاسو د جیب څخه ټول پانګه اچونه {totalContributions} دی۔</li><li><strong>د فند کارکردګۍ:</strong> ستاسو پیسې د المیزان GOKP د تقاعد فند د اوږدې مودې اوسط پر بنسټ د اټکل شوي 12.5% کلني بیرته راګرځېدلو سره وده کوي۔</li><li><strong>میاشتنی مرکب:</strong> هر میاشت، ستاسو بیلانس د فارمول کارولو سره وده کوي: <strong>نوی بیلانس = (زړه بیلانس + ستاسو ونډه) × 1.0104</strong>۔</li>",
    "explanationTitle3": "3. ستاسو وروستۍ پایله",
    "explanationText3": "په تقاعد کې، ستاسو تمنا شوی ارزښت ستاسو لپاره شته د پیسو ټول پوټ دی۔",
    "explanationList3": "<li><strong>ټول پوټ:</strong> د {retireAge} کلونو عمر پورې، ستاسو فند {finalPot} ته رسیدو اټکل شوی دی۔</li><li><strong>ګټه:</strong> د دې ټول څخه، {totalGrowth} د پانګه اچونې کارکردګۍ څخه تولید شوی خالص زیاتوالی دی۔</li><li><strong>میاشتنی عاید:</strong> دا اندازه بیا یو ثابت میاشتنی تادیاتو ته بدلېږي۔ د ستاسو ترتیباتو پر بنسټ، تاسو به د {payoutMonths} میاشتو یا {payoutYears} کلونو لپاره هر میاشت {monthlyPayout} ترلاسه کړئ۔</li>",
    "explanationDisclaimerTitle": "مهم د مسؤلیت ردول",
    "explanationDisclaimerText": "<strong>شخصي څیړنه او د مسؤلیت ردولو خبرتیا</strong><br>دا وسیله زما د شخصي څیړنې محصول دی خاص طور پر د رضاکارانه پرایویټ سیکټر لپاره او یوازې د تعلیمي او تشریحي موخو لپاره دی۔",
    "explanationDisclaimerList": "<li><strong>یوازې اټکلونه:</strong> دا اعداد د تاریخي فند کارکردګۍ پر بنسټ اټکلونه دي او د راتلونکو پایلو تضمین ندي۔</li><li><strong>کوم مسؤلیت نشته:</strong> زه د دې محاسباتو پر بنسټ د کومو مالي زیانونو، زیانونو، یا د ریښتیني نړۍ پریکړو لپاره مسؤلیت نه لرم۔</li><li><strong>د متخصص سره مشوره واخلئ:</strong> دا پیشه ورانه مالي مشوره نده۔ د کومو پانګه اچونو ژمنتیو کولو دمخه مهرباني وکړئ د تصدیق شوي مالي مشیر سره مشوره وکړئ۔</li>"
  },
  "hnd": {
    "currentAge": "حالیہ عمر",
    "retireAge": "ریٹائرمنٹ دی عمر",
    "deathAge": "امید زندگی (عمر)",
    "payoutPeriod": "ادائیگی دی مدت",
    "stepUp": "سالانہ بچت وچ اضافہ (%)",
    "inflation": "امید افراط زر (%)",
    "inflationHint": "(سرکاری: 9-12%)",
    "monthlyPayout": "ریٹائرمنٹ تے ماہانہ ادائیگی (PKR)",
    "monthlyContribution": "ماہانہ شراکت (PKR)",
    "startingAge": "شروع دی عمر",
    "retirementAge": "ریٹائرمنٹ دی عمر",
    "payoutMonths": "ادائیگی دے مہیناں دی تعداد",
    "monthlyPayoutAmount": "ریٹائرمنٹ دے بعد ماہانہ ادائیگی",
    "potAtRetirement": "ریٹائرمنٹ تے رقم",
    "totalContributions": "کل شراکتاں",
    "projectedValue": "امید قیمت",
    "projectedValueNote": "(Meezan GOKP دی کارکردگی تے مبنی تخمینہ)",
    "monthlyContributionLabel": "ماہانہ شراکت:",
    "totalGrowth": "کل اضافہ",
    "myPensionPlan": "میرا پنشن پلان",
    "pensionPlanner": "پنشن پلانر",
    "shareOnWhatsApp": "واٹس ایپ تے شیئر کرو",
    "shareViaEmail": "ای میل دے ذریعے شیئر کرو",
    "shareOnTwitter": "ٹویٹر تے شیئر کرو",
    "copyImage": "تصویر کاپی کرو",
    "dataAligned": "ڈیٹا دے نال منسلک",
    "viewPerformance": "کارکردگی ڈیکھو",
    "inflationLabel": "افراط زر:",
    "lifeExpectancyLabel": "امید زندگی:",
    "estLongTermAvg": "طویل مدتی اوسط دا تخمینہ",
    "months": "مہینے",
    "years": "سال",
    "year": "سال",
    "fromFundProfit": "(فنڈ دے منافع توں)",
    "lifeExpectancyTooltip": "امید زندگی:",
    "lifeExpectancyDesc": "پاکستان دی اوسط امید زندگی تقریباً",
    "lifeExpectancyNote": "ایہ طے کریندا اے کہ ریٹائرمنٹ دے بعد تسیں کتنی دیر تک پنشن دی ادائیگی وصول کرو گے۔ اپنی صحت تے خاندانی تاریخ دی بنیاد تے ایڈجسٹ کرو۔",
    "stepUpTitle": "اضافہ کیویں کم کریندا اے:",
    "stepUpNormal": "عام",
    "stepUpWithInflation": "افراط زر دے نال",
    "inflationImpactTitle": "افراط زر دے اثرات دی وارننگ:",
    "sharePlanTitle": "پنشن پلانر دے نال اپنی ریٹائرمنٹ دی منصوبہ بندی کرو!",
    "emailSubject": "میرا پنشن پلان - پنشن پلانر",
    "emailImageNote": "تصویر منسلک: pension-plan.png",
    "hashtags": "#پنشن_پلانر",
    "footerDataAligned": "ڈیٹا دے نال منسلک",
    "footerViewPerformance": "کارکردگی ڈیکھو",
    "howToInvest": "کیویں سرمایہ کاری کرو",
    "visitWebsite": "ویب سائٹ ڈیکھو",
    "adjustForInflation": "شراکتاں نوں افراط زر دے لئی ایڈجسٹ کرو (خریداری قوت برقرار رکھو)",
    "inflationAdjustTitle": "تواڈی ریٹائرمنٹ تے افراط زر دے اثرات",
    "birdStepRetireAge": "اپنی مطلوبہ ریٹائرمنٹ دی عمر درج کرو۔ ایہ اوہ عمر اے جدوں تسیں کم کرنا بند کرنا چاہندے ہو تے اپنی پنشن وصول کرنا شروع کرنا چاہندے ہو۔",
    "birdStep1": "اپنی موجودہ عمر درج کرو۔ ایہ اوہ تھاں اے جتھے تسیں اپنی ریٹائرمنٹ دی منصوبہ بندی دا سفر شروع کردے ہو۔",
    "birdStep1Payout": "اپنی مطلوبہ ماہانہ ریٹائرمنٹ آمدنی درج کرو۔ ایہ اوہ رقم اے جو تسیں ریٹائرمنٹ دے بعد ہر مہینہ وصول کرنا چاہندے ہو۔",
    "birdStep2": "ایہ پاکستان دی اوسط متوقع عمر (~75 سال) تے سیٹ اے، لیکن تسیں اپنی صحت تے خاندانی تاریخ دی بنیاد تے ایہنوں ایڈجسٹ کر سکدے ہو۔",
    "birdStep3": "ایہ تواڈا ماہانہ بچت دا ہدف اے! کیلکولیٹر نے ایہ تواڈی مطلوبہ ادائیگی تے ریٹائرمنٹ دی ٹائم لائن دی بنیاد تے نکالیا اے۔",
    "birdCalculation": "ایہ جادو اے! 💫\n\nتسیں {monthlyContribution} × {totalMonths} مہینے = کل شراکتاں بچاؤ گے\n\nپھر فنڈ دی {returnRate} واپسی دی شرح مرکب نمو دے ذریعے ہر چیز نوں ضرب دیندی اے!\n\nایہی طریقہ اے جس توں تواڈا پیسہ ودھدا اے! 🚀",
    "pageTitle": "پنشن پلانر",
    "languageSwitcherTitle": "زبان",
    "explanationToggle": "📖 حساب کیویں کم کریندے نیں",
    "explanationIntroText": "ایہ ٹول پرائیویٹ سیکٹر دے پیشہ ور افراد دے لئی اپنی رضاکارانہ پنشن دی منصوبہ بندی کرن دے لئی ڈیزائن کیتا گیا اے۔ جے تواڈا اک خاص مقصد اے، جیویں کم چھڈن دے بعد ہر مہینہ {monthlyPayout} چاہندے ہو، تاں ایہ روڈ میپ بالکل ڈکھاوندا اے کہ حساب کتاب کیویں اتھے پہنچن دا راستہ طے کریندا اے۔",
    "explanationTitle1": "1. اپنے مقصد دی ترتیب",
    "explanationText1": "تسیں اپنی ذاتی ڈیٹا نوں ایڈجسٹ کرکے اپنی طرز زندگی دی وضاحت کرو:",
    "explanationList1": "<li><strong>تواڈا ٹائم لائن:</strong> تسیں اپنی موجودہ عمر {currentAge} تے اپنی مطلوبہ ریٹائرمنٹ دی عمر {retireAge} درج کرو۔</li><li><strong>امید زندگی:</strong> تسیں ایڈجسٹ کر سکدے ہو کہ تسیں فنڈ نوں کتنی دیر تک چلن دی امید رکھدے ہو، جیویں {deathAge} سال۔</li><li><strong>اضافہ بچت:</strong> پرائیویٹ سیکٹر وچ اپنی کیریئر دی نمو توں میل کھان دے لئی، تسیں اپنی ماہانہ شراکت نوں ہر سال {stepUpPercent}% ودھا سکدے ہو۔</li>",
    "explanationTitle2": "2. نمو دا سفر",
    "explanationText2": "جب تسیں اپنے کیریئر تے توجہ دیدے ہو، تاں ٹول دو اہم مراحل دے ذریعے تواڈے فنڈ دی پیشرفت دا حساب لگاوندا اے:",
    "explanationList2": "<li><strong>کل شراکتاں:</strong> اساں {years} سالاں وچ تواڈی ہر ماہانہ ادائیگی نوں جمع کریندے ہاں، تواڈے سالانہ اضافےآں سمیت۔ اس منصوبے دے لئی، تواڈی کل جیب توں سرمایہ کاری {totalContributions} اے۔</li><li><strong>فنڈ دی کارکردگی:</strong> تواڈا پیسہ المیزان GOKP پنشن فنڈ دے طویل مدتی اوسط تے مبنی تخمینی 12.5% سالانہ واپسی تے ودھدا اے۔</li><li><strong>ماہانہ مرکب:</strong> ہر مہینہ، تواڈا بیلنس فارمولا استعمال کریندے ہوئے ودھدا اے: <strong>نواں بیلنس = (پرانے بیلنس + تواڈی شراکت) × 1.0104</strong>۔</li>",
    "explanationTitle3": "3. تواڈا حتمی نتیجہ",
    "explanationText3": "ریٹائرمنٹ تے، تواڈی امید قیمت تواڈے لئی دستیاب رقم دا کل پوٹ اے۔",
    "explanationList3": "<li><strong>کل پوٹ:</strong> {retireAge} سال دی عمر تک، تواڈے فنڈ دے {finalPot} تک پہنچن دا تخمینہ لگایا گیا اے۔</li><li><strong>منافع:</strong> اس کل وچوں، {totalGrowth} سرمایہ کاری دی کارکردگی توں پیدا ہون والی خالص نمو اے۔</li><li><strong>ماہانہ آمدنی:</strong> ایہ رقم اک مستحکم ماہانہ ادائیگی وچ تبدیل ہوندی اے۔ تواڈیاں ترتیبات دی بنیاد تے، تسیں {payoutMonths} مہینےآں یا {payoutYears} سالاں دے لئی ہر مہینہ {monthlyPayout} گھنو گے۔</li>",
    "explanationDisclaimerTitle": "اہم ڈس کلیمر",
    "explanationDisclaimerText": "<strong>ذاتی تحقیق تے غیر ذمہ داری دا نوٹس</strong><br>ایہ ٹول میری ذاتی تحقیق دا نتیجہ اے خاص طور تے رضاکارانہ پرائیویٹ سیکٹر دے لئی تے صرف تعلیمی تے وضاحتی مقاصد دے لئی اے۔",
    "explanationDisclaimerList": "<li><strong>صرف تخمینے:</strong> ایہ اعداد و شمار تاریخی فنڈ دی کارکردگی تے مبنی تخمینے نیں تے مستقبل دے نتائج دی ضمانت نیں۔</li><li><strong>کوئی ذمہ داری نیں:</strong> میں ان حساباں دی بنیاد تے کسی وی مالی نقصانات، نقصانات، یا حقیقی دنیا دے فیصلےآں دے لئی ذمہ دار نیں۔</li><li><strong>ماہر توں مشورہ لو:</strong> ایہ پیشہ ورانہ مالی مشورہ نیں۔ براہ کرم کوئی سرمایہ کاری دا عہد کرن توں پہلے اک سرٹیفائیڈ مالی مشیر توں مشورہ کرو۔</li>"
  }
};


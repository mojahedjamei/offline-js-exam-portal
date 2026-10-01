/* ==========================================
   js/questions.js - بانک سوالات آزمون جنگو
   شامل ۱۰۰ سوال با توضیحات آموزشی
   ========================================== */

const QUESTIONS = [
  {
    id: 1,
    text: "Django چیست؟",
    options: ["یک زبان برنامه‌نویسی", "یک فریم‌ورک وب مبتنی بر پایتون", "یک پایگاه داده", "یک سیستم‌عامل"],
    answer: 1,
    explanation: "Django یک فریم‌ورک وب سطح بالا است که با زبان Python توسعه داده شده و برای ساخت سریع و امن وب‌اپلیکیشن‌ها استفاده می‌شود."
  },
  {
    id: 2,
    text: "کدام دستور برای نصب Django استفاده می‌شود؟",
    options: ["python install django", "pip install django", "django install", "install django"],
    answer: 1,
    explanation: "ابزار pip برای نصب کتابخانه‌ها و فریم‌ورک‌های پایتون از جمله Django استفاده می‌شود."
  },
  {
    id: 3,
    text: "دستور ایجاد یک پروژه جدید در Django کدام است؟",
    options: ["django startproject", "django-admin startproject", "python startproject", "django-admin newproject"],
    answer: 1,
    explanation: "دستور django-admin startproject ساختار اولیه و استاندارد یک پروژه Django را ایجاد می‌کند."
  },
  {
    id: 4,
    text: "کدام فایل برای اجرای دستورات مدیریتی Django استفاده می‌شود؟",
    options: ["settings.py", "urls.py", "manage.py", "views.py"],
    answer: 2,
    explanation: "فایل manage.py امکان اجرای دستورات مدیریتی مانند runserver و migrate را فراهم می‌کند."
  },
  {
    id: 5,
    text: "دستور اجرای سرور توسعه Django کدام است؟",
    options: ["python manage.py start", "python manage.py runserver", "django run", "django startserver"],
    answer: 1,
    explanation: "این دستور سرور توسعه داخلی Django را اجرا کرده و پروژه را در مرورگر نمایش می‌دهد."
  },
  {
    id: 6,
    text: "معماری پیش‌فرض Django بر اساس کدام الگو است؟",
    options: ["MVC", "MVP", "MVT", "MVVM"],
    answer: 2,
    explanation: "Django از الگوی MVT شامل Model، View و Template برای تفکیک وظایف استفاده می‌کند."
  },
  {
    id: 7,
    text: "در معماری MVT کدام بخش مسئول مدیریت داده‌ها است؟",
    options: ["View", "Template", "Model", "URL"],
    answer: 2,
    explanation: "Model ساختار داده‌ها و ارتباط با پایگاه داده را مدیریت می‌کند."
  },
  {
    id: 8,
    text: "کدام فایل برای تعریف مسیرهای URL استفاده می‌شود؟",
    options: ["views.py", "models.py", "urls.py", "settings.py"],
    answer: 2,
    explanation: "فایل urls.py مسیر درخواست‌ها را به Viewهای مربوطه متصل می‌کند."
  },
  {
    id: 9,
    text: "برای ایجاد یک اپلیکیشن جدید در Django از کدام دستور استفاده می‌شود؟",
    options: ["django-admin startapp", "python manage.py startapp", "django startapp", "python start project"],
    answer: 1,
    explanation: "این دستور یک اپلیکیشن جدید با ساختار استاندارد در پروژه Django ایجاد می‌کند."
  },
  {
    id: 10,
    text: "کدام بخش وظیفه نمایش داده‌ها به کاربر را دارد؟",
    options: ["View", "Model", "Template", "URL"],
    answer: 2,
    explanation: "Templateها داده‌ها را به صورت HTML به کاربر نمایش می‌دهند."
  },
  {
    id: 11,
    text: "کدام دستور برای ایجاد فایل‌های مهاجرت استفاده می‌شود؟",
    options: ["migrate", "runserver", "makemigrations", "createsuperuser"],
    answer: 2,
    explanation: "این دستور تغییرات مدل‌ها را در قالب فایل مهاجرت ذخیره می‌کند."
  },
  {
    id: 12,
    text: "کدام دستور تغییرات مهاجرت را در پایگاه داده اعمال می‌کند؟",
    options: ["makemigrations", "migrate", "startapp", "runserver"],
    answer: 1,
    explanation: "دستور migrate تغییرات ثبت‌شده را روی پایگاه داده اعمال می‌کند."
  },
  {
    id: 13,
    text: "پایگاه داده پیش‌فرض Django کدام است؟",
    options: ["MySQL", "PostgreSQL", "SQLite", "Oracle"],
    answer: 2,
    explanation: "SQLite به صورت پیش‌فرض برای پروژه‌های ساده در Django استفاده می‌شود."
  },
  {
    id: 14,
    text: "تنظیمات پایگاه داده در کدام فایل قرار دارد؟",
    options: ["urls.py", "views.py", "settings.py", "admin.py"],
    answer: 2,
    explanation: "اطلاعات اتصال به پایگاه داده در فایل settings.py تعریف می‌شود."
  },
  {
    id: 15,
    text: "کدام دستور برای ساخت کاربر مدیر استفاده می‌شود؟",
    options: ["createadmin", "createsuperuser", "makeadmin", "superuser"],
    answer: 1,
    explanation: "این دستور برای ایجاد حساب مدیر جهت ورود به پنل ادمین استفاده می‌شود."
  },
  {
    id: 16,
    text: "پنل مدیریت Django در کدام مسیر قرار دارد؟",
    options: ["/login", "/panel", "/admin", "/manage"],
    answer: 2,
    explanation: "پنل مدیریت Django به صورت پیش‌فرض در مسیر /admin در دسترس است."
  },
  {
    id: 17,
    text: "برای فعال‌سازی اپلیکیشن باید آن را در کدام بخش ثبت کرد؟",
    options: ["urls.py", "views.py", "INSTALLED_APPS", "TEMPLATES"],
    answer: 2,
    explanation: "اپلیکیشن‌ها باید در بخش INSTALLED_APPS فایل settings.py ثبت شوند."
  },
  {
    id: 18,
    text: "مدل‌های پایگاه داده در کدام فایل تعریف می‌شوند؟",
    options: ["views.py", "models.py", "admin.py", "forms.py"],
    answer: 1,
    explanation: "ساختار جداول پایگاه داده در فایل models.py تعریف می‌شود."
  },
  {
    id: 19,
    text: "کدام دستور برای ورود به محیط پوسته Django استفاده می‌شود؟",
    options: ["python shell", "django shell", "python manage.py shell", "manage shell"],
    answer: 2,
    explanation: "این دستور محیط تعاملی Django را برای تست کدها فراهم می‌کند."
  },
  {
    id: 20,
    text: "کدام نوع View ساده‌تر و رایج‌تر است؟",
    options: ["Function Based View", "Class Based View", "Template View", "Admin View"],
    answer: 0,
    explanation: "Viewهای تابعی ساده‌تر هستند و برای پروژه‌های کوچک مناسب‌اند."
  },
  {
    id: 21,
    text: "کدام فایل برای ثبت مدل‌ها در پنل مدیریت استفاده می‌شود؟",
    options: ["models.py", "admin.py", "views.py", "urls.py"],
    answer: 1,
    explanation: "مدل‌ها باید در admin.py ثبت شوند تا در پنل مدیریت نمایش داده شوند."
  },
  {
    id: 22,
    text: "کدام دستور نسخه Django را نمایش می‌دهد؟",
    options: ["django version", "django-admin version", "django-admin --version", "python django version"],
    answer: 2,
    explanation: "این دستور نسخه نصب‌شده Django را نمایش می‌دهد."
  },
  {
    id: 23,
    text: "کدام بخش مسئول پردازش درخواست کاربر است؟",
    options: ["Model", "Template", "View", "URL"],
    answer: 2,
    explanation: "View منطق برنامه را اجرا کرده و پاسخ مناسب تولید می‌کند."
  },
  {
    id: 24,
    text: "کدام دستور برای جمع‌آوری فایل‌های استاتیک استفاده می‌شود؟",
    options: ["collectstatic", "makestatic", "staticfiles", "runstatic"],
    answer: 0,
    explanation: "این دستور فایل‌های استاتیک را برای محیط عملیاتی آماده می‌کند."
  },
  {
    id: 25,
    text: "هدف اصلی استفاده از Django چیست؟",
    options: ["طراحی گرافیک", "توسعه سریع و امن وب", "مدیریت سرور", "ساخت سیستم‌عامل"],
    answer: 1,
    explanation: "Django با فراهم‌کردن ابزارهای آماده، فرآیند توسعه وب را سریع‌تر و امن‌تر می‌کند."
  },
  {
    id: 26,
    text: "کدام فایل برای تعریف Viewها در Django استفاده می‌شود؟",
    options: ["models.py", "urls.py", "views.py", "settings.py"],
    answer: 2,
    explanation: "منطق پردازش درخواست‌ها و تولید پاسخ در فایل views.py نوشته می‌شود."
  },
  {
    id: 27,
    text: "برای ارسال داده از View به Template از چه چیزی استفاده می‌شود؟",
    options: ["URL", "Context", "Model", "Form"],
    answer: 1,
    explanation: "Context یک دیکشنری است که داده‌ها را از View به Template منتقل می‌کند."
  },
  {
    id: 28,
    text: "کدام تگ برای بارگذاری فایل‌های استاتیک در Template استفاده می‌شود؟",
    options: ["load static", "static load", "include static", "import static"],
    answer: 0,
    explanation: "تگ load static برای استفاده از فایل‌های CSS و JavaScript در قالب‌ها به کار می‌رود."
  },
  {
    id: 29,
    text: "کدام پوشه به صورت پیش‌فرض برای Templateها استفاده می‌شود؟",
    options: ["views", "templates", "static", "media"],
    answer: 1,
    explanation: "فایل‌های HTML قالب‌ها در پوشه templates قرار می‌گیرند."
  },
  {
    id: 30,
    text: "کدام دستور برای ایجاد فایل‌های استاتیک استفاده می‌شود؟",
    options: ["staticfiles", "collectstatic", "makestatic", "runstatic"],
    answer: 1,
    explanation: "دستور collectstatic فایل‌های استاتیک را برای محیط عملیاتی جمع‌آوری می‌کند."
  },
  {
    id: 31,
    text: "کدام نوع داده برای کلید اصلی به صورت پیش‌فرض استفاده می‌شود؟",
    options: ["CharField", "IntegerField", "AutoField", "BooleanField"],
    answer: 2,
    explanation: "AutoField به صورت خودکار شناسه یکتا برای هر رکورد ایجاد می‌کند."
  },
  {
    id: 32,
    text: "کدام متد برای ذخیره یک شیء مدل استفاده می‌شود؟",
    options: ["add", "insert", "save", "commit"],
    answer: 2,
    explanation: "متد save اطلاعات شیء را در پایگاه داده ذخیره می‌کند."
  },
  {
    id: 33,
    text: "برای حذف یک رکورد از پایگاه داده از چه متدی استفاده می‌شود؟",
    options: ["remove", "delete", "drop", "clear"],
    answer: 1,
    explanation: "متد delete رکورد موردنظر را از پایگاه داده حذف می‌کند."
  },
  {
    id: 34,
    text: "کدام متد برای دریافت یک رکورد خاص استفاده می‌شود؟",
    options: ["filter", "all", "get", "select"],
    answer: 2,
    explanation: "متد get یک رکورد مشخص را بر اساس شرط برمی‌گرداند."
  },
  {
    id: 35,
    text: "کدام متد ممکن است بیش از یک رکورد برگرداند؟",
    options: ["get", "create", "filter", "save"],
    answer: 2,
    explanation: "متد filter یک QuerySet شامل چند رکورد برمی‌گرداند."
  },
  {
    id: 36,
    text: "برای مرتب‌سازی نتایج QuerySet از چه متدی استفاده می‌شود؟",
    options: ["sort", "order_by", "arrange", "group"],
    answer: 1,
    explanation: "متد order_by نتایج را بر اساس فیلد دلخواه مرتب می‌کند."
  },
  {
    id: 37,
    text: "کدام گزینه برای محدود کردن تعداد نتایج استفاده می‌شود؟",
    options: ["limit", "slice", "cut", "range"],
    answer: 1,
    explanation: "با استفاده از برش QuerySet می‌توان تعداد نتایج را محدود کرد."
  },
  {
    id: 38,
    text: "کدام فیلد برای ذخیره متن طولانی مناسب است؟",
    options: ["CharField", "TextField", "IntegerField", "EmailField"],
    answer: 1,
    explanation: "TextField برای ذخیره متن‌های طولانی استفاده می‌شود."
  },
  {
    id: 39,
    text: "کدام فیلد برای ذخیره ایمیل استفاده می‌شود؟",
    options: ["EmailField", "CharField", "URLField", "TextField"],
    answer: 0,
    explanation: "EmailField اعتبارسنجی فرمت ایمیل را انجام می‌دهد."
  },
  {
    id: 40,
    text: "کدام فیلد برای ذخیره تاریخ و زمان استفاده می‌شود؟",
    options: ["DateField", "TimeField", "DateTimeField", "Timestamp"],
    answer: 2,
    explanation: "DateTimeField تاریخ و زمان را همزمان ذخیره می‌کند."
  },
  {
    id: 41,
    text: "کدام فایل برای تعریف فرم‌ها استفاده می‌شود؟",
    options: ["forms.py", "views.py", "models.py", "admin.py"],
    answer: 0,
    explanation: "فرم‌ها برای دریافت داده از کاربر استفاده می‌شوند."
  },
  {
    id: 42,
    text: "کدام متد فرم داده‌ها را بررسی می‌کند؟",
    options: ["save", "clean", "is_valid", "validate"],
    answer: 2,
    explanation: "متد is_valid داده‌های فرم را اعتبارسنجی می‌کند."
  },
  {
    id: 43,
    text: "کدام ویژگی برای جلوگیری از ارسال فرم خالی استفاده می‌شود؟",
    options: ["blank", "null", "required", "empty"],
    answer: 2,
    explanation: "ویژگی required ارسال فیلد خالی را منع می‌کند."
  },
  {
    id: 44,
    text: "کدام بخش برای مدیریت کاربران استفاده می‌شود؟",
    options: ["auth", "admin", "users", "security"],
    answer: 0,
    explanation: "سیستم auth Django مدیریت کاربران و احراز هویت را انجام می‌دهد."
  },
  {
    id: 45,
    text: "کدام دستور برای ایجاد رمز عبور امن استفاده می‌شود؟",
    options: ["encrypt", "hash", "set_password", "make_password"],
    answer: 3,
    explanation: "متد set_password رمز عبور را به صورت هش ذخیره می‌کند."
  },
  {
    id: 46,
    text: "کدام Decorator برای محدود کردن دسترسی استفاده می‌شود؟",
    options: ["login_required", "staff_only", "admin_required", "secure"],
    answer: 0,
    explanation: "Decorator login_required دسترسی کاربران لاگین‌نشده را محدود می‌کند."
  },
  {
    id: 47,
    text: "کدام فایل برای تنظیمات امنیتی استفاده می‌شود؟",
    options: ["urls.py", "views.py", "settings.py", "admin.py"],
    answer: 2,
    explanation: "تنظیمات امنیتی در فایل settings.py انجام می‌شود."
  },
  {
    id: 48,
    text: "کدام گزینه برای جلوگیری از حمله CSRF استفاده می‌شود؟",
    options: ["csrf_token", "secure_token", "safe_form", "csrf_secure"],
    answer: 0,
    explanation: "توکن CSRF از ارسال درخواست‌های جعلی جلوگیری می‌کند."
  },
  {
    id: 49,
    text: "کدام دستور برای اجرای تست‌ها استفاده می‌شود؟",
    options: ["runserver", "test", "python manage.py test", "django test"],
    answer: 2,
    explanation: "این دستور تست‌های نوشته‌شده را اجرا می‌کند."
  },
  {
    id: 50,
    text: "کدام هدف اصلی Django در توسعه وب است؟",
    options: ["افزایش پیچیدگی", "توسعه سریع، امن و مقیاس‌پذیر", "مدیریت سخت‌افزار", "طراحی رابط گرافیکی"],
    answer: 1,
    explanation: "Django با فراهم‌کردن ساختار آماده توسعه وب را سریع، امن و قابل توسعه می‌کند."
  },
  {
    id: 51,
    text: "کدام فریم‌ورک Django برای چه زبانی توسعه داده شده است؟",
    options: ["Java", "PHP", "Python", "JavaScript"],
    answer: 2,
    explanation: "Django یک فریم‌ورک وب است که با زبان Python توسعه داده شده و از قابلیت‌های این زبان استفاده می‌کند."
  },
  {
    id: 52,
    text: "کدام دستور برای ایجاد جدول‌های پایگاه داده بر اساس مدل‌ها استفاده می‌شود؟",
    options: ["makemigrations", "migrate", "runserver", "createsuperuser"],
    answer: 1,
    explanation: "دستور migrate فایل‌های مهاجرت را روی پایگاه داده اعمال می‌کند و جدول‌ها را می‌سازد."
  },
  {
    id: 53,
    text: "کدام فایل برای مدیریت پنل ادمین استفاده می‌شود؟",
    options: ["admin.py", "models.py", "views.py", "urls.py"],
    answer: 0,
    explanation: "در فایل admin.py مدل‌ها برای نمایش در پنل مدیریت ثبت می‌شوند."
  },
  {
    id: 54,
    text: "کدام نوع رابطه برای ارتباط چند به چند استفاده می‌شود؟",
    options: ["ForeignKey", "OneToOneField", "ManyToManyField", "AutoField"],
    answer: 2,
    explanation: "ManyToManyField برای ایجاد ارتباط چند به چند بین مدل‌ها استفاده می‌شود."
  },
  {
    id: 55,
    text: "کدام رابطه برای ارتباط یک به چند استفاده می‌شود؟",
    options: ["ManyToManyField", "OneToOneField", "ForeignKey", "IntegerField"],
    answer: 2,
    explanation: "ForeignKey یک رابطه یک به چند بین دو مدل ایجاد می‌کند."
  },
  {
    id: 56,
    text: "کدام رابطه برای ارتباط یک به یک استفاده می‌شود؟",
    options: ["ForeignKey", "ManyToManyField", "OneToOneField", "AutoField"],
    answer: 2,
    explanation: "OneToOneField برای ارتباط یک رکورد از هر مدل استفاده می‌شود."
  },
  {
    id: 57,
    text: "کدام ویژگی در مدل برای اختیاری بودن فیلد استفاده می‌شود؟",
    options: ["required", "blank", "default", "editable"],
    answer: 1,
    explanation: "ویژگی blank اجازه می‌دهد فیلد بدون مقدار ذخیره شود."
  },
  {
    id: 58,
    text: "کدام ویژگی برای ذخیره مقدار خالی در پایگاه داده استفاده می‌شود؟",
    options: ["empty", "blank", "null", "default"],
    answer: 2,
    explanation: "ویژگی null مشخص می‌کند که مقدار NULL در پایگاه داده مجاز است."
  },
  {
    id: 59,
    text: "کدام متد برای ایجاد و ذخیره همزمان یک شیء استفاده می‌شود؟",
    options: ["save", "add", "create", "insert"],
    answer: 2,
    explanation: "متد create شیء جدید را ایجاد و بلافاصله در پایگاه داده ذخیره می‌کند."
  },
  {
    id: 60,
    text: "کدام متد تعداد رکوردها را برمی‌گرداند؟",
    options: ["length", "count", "size", "total"],
    answer: 1,
    explanation: "متد count تعداد رکوردهای موجود در QuerySet را برمی‌گرداند."
  },
  {
    id: 61,
    text: "کدام فایل برای تعریف سیگنال‌ها استفاده می‌شود؟",
    options: ["signals.py", "models.py", "views.py", "urls.py"],
    answer: 0,
    explanation: "سیگنال‌ها برای اجرای کد در زمان رخداد رویدادهای خاص استفاده می‌شوند."
  },
  {
    id: 62,
    text: "کدام سیگنال بعد از ذخیره یک مدل اجرا می‌شود؟",
    options: ["pre_save", "post_save", "pre_delete", "post_delete"],
    answer: 1,
    explanation: "سیگنال post_save پس از ذخیره موفق یک مدل اجرا می‌شود."
  },
  {
    id: 63,
    text: "کدام ابزار برای مسیریابی در Django استفاده می‌شود؟",
    options: ["route", "path", "link", "redirect"],
    answer: 1,
    explanation: "تابع path برای تعریف مسیرهای URL در فایل urls.py استفاده می‌شود."
  },
  {
    id: 64,
    text: "کدام متد برای تغییر مسیر کاربر استفاده می‌شود؟",
    options: ["render", "redirect", "response", "route"],
    answer: 1,
    explanation: "تابع redirect کاربر را به آدرس دیگری هدایت می‌کند."
  },
  {
    id: 65,
    text: "کدام فایل برای مدیریت رسانه‌ها استفاده می‌شود؟",
    options: ["static", "media", "templates", "files"],
    answer: 1,
    explanation: "فایل‌های آپلودی کاربران در پوشه media ذخیره می‌شوند."
  },
  {
    id: 66,
    text: "کدام تنظیم مسیر فایل‌های رسانه‌ای را مشخص می‌کند؟",
    options: ["STATIC_URL", "MEDIA_URL", "TEMPLATE_URL", "FILE_URL"],
    answer: 1,
    explanation: "MEDIA_URL مسیر دسترسی به فایل‌های رسانه‌ای را مشخص می‌کند."
  },
  {
    id: 67,
    text: "کدام فریم‌ورک برای API در Django استفاده می‌شود؟",
    options: ["Django API", "Django REST Framework", "Django JSON", "Django HTTP"],
    answer: 1,
    explanation: "Django REST Framework برای ساخت APIهای RESTful استفاده می‌شود."
  },
  {
    id: 68,
    text: "کدام کلاس برای ساخت API View استفاده می‌شود؟",
    options: ["APIView", "TemplateView", "ModelView", "AdminView"],
    answer: 0,
    explanation: "کلاس APIView پایه برای ساخت Viewهای API است."
  },
  {
    id: 69,
    text: "کدام Serializer برای تبدیل مدل به JSON استفاده می‌شود؟",
    options: ["ModelSerializer", "JSONField", "SerializerField", "DataSerializer"],
    answer: 0,
    explanation: "ModelSerializer مدل‌ها را به داده‌های JSON تبدیل می‌کند."
  },
  {
    id: 70,
    text: "کدام متد برای دریافت داده از درخواست استفاده می‌شود؟",
    options: ["request.get", "request.POST", "request.DATA", "request.input"],
    answer: 1,
    explanation: "داده‌های ارسال‌شده از طریق فرم در request.POST قرار دارند."
  },
  {
    id: 71,
    text: "کدام متد برای ارسال پاسخ JSON استفاده می‌شود؟",
    options: ["JsonResponse", "HttpResponse", "render", "response"],
    answer: 0,
    explanation: "JsonResponse داده‌ها را به صورت JSON به کاربر برمی‌گرداند."
  },
  {
    id: 72,
    text: "کدام فایل برای تست‌نویسی استفاده می‌شود؟",
    options: ["test.py", "tests.py", "testing.py", "check.py"],
    answer: 1,
    explanation: "تست‌ها در فایل tests.py نوشته و اجرا می‌شوند."
  },
  {
    id: 73,
    text: "کدام دستور برای ساخت فایل‌های تست استفاده می‌شود؟",
    options: ["starttest", "test", "maketest", "django test"],
    answer: 1,
    explanation: "با دستور test می‌توان تست‌های پروژه را اجرا کرد."
  },
  {
    id: 74,
    text: "کدام ویژگی برای محدود کردن دسترسی کاربر استفاده می‌شود؟",
    options: ["permission", "auth", "permission_required", "secure"],
    answer: 2,
    explanation: "Decorator permission_required دسترسی کاربران را بر اساس مجوز محدود می‌کند."
  },
  {
    id: 75,
    text: "کدام هدف اصلی استفاده از Django در پروژه‌های بزرگ است؟",
    options: ["افزایش سرعت سرور", "توسعه ساخت‌یافته و قابل نگهداری", "کاهش حجم کد", "طراحی رابط کاربری"],
    answer: 1,
    explanation: "Django با ساختار منظم نگهداری و توسعه پروژه‌های بزرگ را ساده می‌کند."
  },
  {
    id: 76,
    text: "کدام تنظیم برای فعال‌سازی حالت اشکال‌زدایی در Django استفاده می‌شود؟",
    options: ["DEBUG", "TEST", "DEVELOP", "ERROR"],
    answer: 0,
    explanation: "تنظیم DEBUG در فایل settings.py برای نمایش خطاها در محیط توسعه استفاده می‌شود."
  },
  {
    id: 77,
    text: "در محیط عملیاتی مقدار DEBUG باید چگونه باشد؟",
    options: ["True", "False", "None", "Auto"],
    answer: 1,
    explanation: "در محیط عملیاتی باید DEBUG برابر False باشد تا اطلاعات حساس نمایش داده نشود."
  },
  {
    id: 78,
    text: "کدام تنظیم برای مشخص کردن میزبان‌های مجاز استفاده می‌شود؟",
    options: ["HOSTS", "ALLOWED_HOSTS", "SERVER_HOST", "SITE_HOST"],
    answer: 1,
    explanation: "ALLOWED_HOSTS دامنه‌ها و IPهای مجاز برای دسترسی به پروژه را مشخص می‌کند."
  },
  {
    id: 79,
    text: "کدام Middleware برای امنیت CSRF استفاده می‌شود؟",
    options: ["AuthenticationMiddleware", "SessionMiddleware", "CsrfViewMiddleware", "SecurityMiddleware"],
    answer: 2,
    explanation: "CsrfViewMiddleware از ارسال درخواست‌های جعلی جلوگیری می‌کند."
  },
  {
    id: 80,
    text: "کدام Middleware اطلاعات کاربر لاگین‌شده را مدیریت می‌کند؟",
    options: ["SessionMiddleware", "AuthenticationMiddleware", "MessageMiddleware", "LocaleMiddleware"],
    answer: 1,
    explanation: "AuthenticationMiddleware اطلاعات کاربر احراز هویت‌شده را مدیریت می‌کند."
  },
  {
    id: 81,
    text: "کدام تنظیم برای مسیر فایل‌های استاتیک استفاده می‌شود؟",
    options: ["STATIC_URL", "MEDIA_URL", "STATIC_PATH", "FILE_URL"],
    answer: 0,
    explanation: "STATIC_URL مسیر دسترسی به فایل‌های استاتیک را مشخص می‌کند."
  },
  {
    id: 82,
    text: "کدام پوشه برای نگهداری فایل‌های استاتیک پروژه استفاده می‌شود؟",
    options: ["templates", "media", "static", "files"],
    answer: 2,
    explanation: "فایل‌های استاتیک مانند CSS و JavaScript در پوشه static قرار می‌گیرند."
  },
  {
    id: 83,
    text: "کدام دستور برای ساخت ترجمه‌ها استفاده می‌شود؟",
    options: ["makelanguage", "makemessages", "translate", "compiletext"],
    answer: 1,
    explanation: "دستور makemessages برای استخراج رشته‌های قابل ترجمه استفاده می‌شود."
  },
  {
    id: 84,
    text: "کدام دستور فایل‌های ترجمه را کامپایل می‌کند؟",
    options: ["makemessages", "compilemessages", "buildmessages", "translatemessages"],
    answer: 1,
    explanation: "دستور compilemessages فایل‌های ترجمه را برای استفاده در پروژه آماده می‌کند."
  },
  {
    id: 85,
    text: "کدام تنظیم برای زبان پیش‌فرض پروژه استفاده می‌شود؟",
    options: ["DEFAULT_LANGUAGE", "LANGUAGE", "LANGUAGE_CODE", "SITE_LANGUAGE"],
    answer: 2,
    explanation: "LANGUAGE_CODE زبان پیش‌فرض پروژه Django را مشخص می‌کند."
  },
  {
    id: 86,
    text: "کدام تنظیم برای منطقه زمانی استفاده می‌شود؟",
    options: ["TIME", "TIME_ZONE", "ZONE", "LOCAL_TIME"],
    answer: 1,
    explanation: "TIME_ZONE منطقه زمانی پروژه را تعیین می‌کند."
  },
  {
    id: 87,
    text: "کدام کلاس برای نمایش پیام به کاربر استفاده می‌شود؟",
    options: ["Message", "Alert", "messages", "notify"],
    answer: 2,
    explanation: "سیستم messages برای نمایش پیام‌های موقت به کاربر استفاده می‌شود."
  },
  {
    id: 88,
    text: "کدام متد برای افزودن پیام موفقیت استفاده می‌شود؟",
    options: ["messages.add", "messages.success", "messages.info", "messages.ok"],
    answer: 1,
    explanation: "messages.success پیام موفقیت را به کاربر نمایش می‌دهد."
  },
  {
    id: 89,
    text: "کدام دستور برای بررسی تنظیمات پروژه استفاده می‌شود؟",
    options: ["check", "verify", "validate", "inspect"],
    answer: 0,
    explanation: "دستور check تنظیمات پروژه را بررسی و خطاهای احتمالی را گزارش می‌کند."
  },
  {
    id: 90,
    text: "کدام فایل برای تنظیم مسیرهای اصلی پروژه استفاده می‌شود؟",
    options: ["app urls.py", "main urls.py", "project urls.py", "root.py"],
    answer: 2,
    explanation: "فایل urls.py اصلی پروژه مسیرهای کلی را مدیریت می‌کند."
  },
  {
    id: 91,
    text: "کدام تابع برای رندر قالب استفاده می‌شود؟",
    options: ["show", "display", "render", "response"],
    answer: 2,
    explanation: "تابع render قالب HTML را به همراه داده‌ها به کاربر نمایش می‌دهد."
  },
  {
    id: 92,
    text: "کدام نوع درخواست برای ارسال فرم استفاده می‌شود؟",
    options: ["GET", "POST", "PUT", "DELETE"],
    answer: 1,
    explanation: "درخواست POST برای ارسال داده‌های فرم به سرور استفاده می‌شود."
  },
  {
    id: 93,
    text: "کدام ویژگی برای جلوگیری از اجرای کد مخرب استفاده می‌شود؟",
    options: ["secure", "escape", "safe", "clean"],
    answer: 1,
    explanation: "escape از اجرای کدهای مخرب در قالب‌ها جلوگیری می‌کند."
  },
  {
    id: 94,
    text: "کدام فیلتر اجازه اجرای HTML را می‌دهد؟",
    options: ["escape", "safe", "html", "allow"],
    answer: 1,
    explanation: "فیلتر safe اجازه می‌دهد کد HTML بدون escape نمایش داده شود."
  },
  {
    id: 95,
    text: "کدام دستور برای فشرده‌سازی فایل‌های استاتیک استفاده می‌شود؟",
    options: ["compress", "collectstatic", "minify", "buildstatic"],
    answer: 1,
    explanation: "در Django دستور collectstatic برای مدیریت فایل‌های استاتیک استفاده می‌شود."
  },
  {
    id: 96,
    text: "کدام تنظیم برای فعال‌سازی HTTPS استفاده می‌شود؟",
    options: ["USE_SSL", "SECURE_SSL_REDIRECT", "HTTPS_ONLY", "SSL_ENABLE"],
    answer: 1,
    explanation: "SECURE_SSL_REDIRECT تمام درخواست‌ها را به HTTPS هدایت می‌کند."
  },
  {
    id: 97,
    text: "کدام هدر امنیتی برای جلوگیری از کلیک‌جکینگ استفاده می‌شود؟",
    options: ["X_FRAME_OPTIONS", "SECURE_FRAME", "FRAME_BLOCK", "CLICK_SAFE"],
    answer: 0,
    explanation: "X_FRAME_OPTIONS از نمایش سایت در iframe جلوگیری می‌کند."
  },
  {
    id: 98,
    text: "کدام تنظیم برای امنیت کوکی‌ها استفاده می‌شود؟",
    options: ["COOKIE_SAFE", "SESSION_COOKIE_SECURE", "COOKIE_LOCK", "SECURE_COOKIE"],
    answer: 1,
    explanation: "SESSION_COOKIE_SECURE کوکی‌ها را فقط در HTTPS ارسال می‌کند."
  },
  {
    id: 99,
    text: "کدام دستور برای جمع‌آوری گزارش‌های خطا استفاده می‌شود؟",
    options: ["log", "error", "logging", "report"],
    answer: 2,
    explanation: "سیستم logging برای ثبت و مدیریت خطاها استفاده می‌شود."
  },
  {
    id: 100,
    text: "کدام ویژگی Django باعث افزایش امنیت پیش‌فرض می‌شود؟",
    options: ["تنظیمات دستی", "Middlewareهای امنیتی", "استفاده از پایگاه داده", "Templateها"],
    answer: 1,
    explanation: "Middlewareهای امنیتی Django به صورت پیش‌فرض بسیاری از حملات رایج را خنثی می‌کنند."
  }
];

// تابع کمکی برای گرفتن تمام سوالات
function getAllQuestions() {
  return QUESTIONS;
}

// تابع کمکی برای گرفتن سوال بر اساس ID
function getQuestionById(id) {
  return QUESTIONS.find(question => question.id === id);
}

// تابع کمکی برای گرفتن تعداد سوالات
function getQuestionsCount() {
  return QUESTIONS.length;
}

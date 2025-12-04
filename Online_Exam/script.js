const questions = {
    "Office Management Tools": [
        { q: "What is the primary function of Office Management Tools?", options: ["Scheduling", "Document Management", "Data Entry", "All of the above"], answer: "All of the above" },
        { q: "Which tool is widely used for document management?", options: ["MS Word", "MS Excel", "Google Docs", "All of the above"], answer: "All of the above" },
        { q: "What is the purpose of email in office management?", options: ["Communication", "Marketing", "Research", "All of the above"], answer: "Communication" },
        { q: "Which feature is common in most office management software?", options: ["Task Management", "Document Sharing", "Cloud Storage", "All of the above"], answer: "All of the above" },
        { q: "What is the most common file format used in office management?", options: ["PDF", "Word", "Excel", "All of the above"], answer: "All of the above" },
        { q: "What does CRM stand for?", options: ["Customer Relation Management", "Customer Resource Management", "Client Relationship Management", "Customer Risk Management"], answer: "Customer Relation Management" },
        { q: "Which of these is a feature of an office management tool?", options: ["Task Scheduling", "Email Management", "Time Tracking", "All of the above"], answer: "All of the above" },
        { q: "Which of these is not an office management tool?", options: ["Trello", "Slack", "Google Docs", "Photoshop"], answer: "Photoshop" },
        { q: "What is the benefit of cloud storage in office management?", options: ["Easy access", "Secure backup", "Collaboration", "All of the above"], answer: "All of the above" },
        { q: "Which of these is a communication tool used in office management?", options: ["Slack", "Zoom", "Skype", "All of the above"], answer: "All of the above" }
    ],
    "Computer Architecture": [
        { q: "What does CPU stand for?", options: ["Central Processing Unit", "Central Power Unit", "Centralized Processing Unit", "Centralized Power Unit"], answer: "Central Processing Unit" },
        { q: "What is the function of the ALU?", options: ["Arithmetic Logic Unit", "Arithmetic Language Unit", "Action Logic Unit", "Active Logic Unit"], answer: "Arithmetic Logic Unit" },
        { q: "Which of the following is not a type of memory?", options: ["RAM", "ROM", "Flash", "USB"], answer: "USB" },
        { q: "Which part of the computer performs the majority of calculations?", options: ["ALU", "Control Unit", "Memory", "I/O Devices"], answer: "ALU" },
        { q: "Which of the following is used for secondary storage?", options: ["RAM", "Cache", "Hard Drive", "Register"], answer: "Hard Drive" },
        { q: "What does the control unit of the CPU do?", options: ["Performs calculations", "Fetches and decodes instructions", "Manages memory", "Controls I/O devices"], answer: "Fetches and decodes instructions" },
        { q: "What is the primary function of the cache memory?", options: ["Store data temporarily", "Store operating system", "Store frequently used data for faster access", "Store program files"], answer: "Store frequently used data for faster access" },
        { q: "What is the name of the technique used to improve CPU performance by executing multiple instructions in parallel?", options: ["Multithreading", "Pipelining", "Caching", "Interrupts"], answer: "Pipelining" },
        { q: "Which of these is a part of the CPU?", options: ["Control Unit", "ALU", "Registers", "All of the above"], answer: "All of the above" },
        { q: "Which of these is a type of processor architecture?", options: ["CISC", "RISC", "MIPS", "All of the above"], answer: "All of the above" }
    ],
    "Operating Systems": [
        { q: "What is the main function of an operating system?", options: ["Manage hardware", "Execute programs", "Manage files", "All of the above"], answer: "All of the above" },
        { q: "Which of these is not a type of operating system?", options: ["Windows", "Linux", "Mac OS", "HTML"], answer: "HTML" },
        { q: "What is the kernel in an OS?", options: ["Central part of the OS", "Disk Storage", "User Interface", "None of the above"], answer: "Central part of the OS" },
        { q: "Which of these is a type of multitasking?", options: ["Preemptive multitasking", "Cooperative multitasking", "Both", "None"], answer: "Both" },
        { q: "Which of these is not a type of file system?", options: ["FAT", "NTFS", "EXT4", "HTML"], answer: "HTML" },
        { q: "What is the main function of the process scheduler?", options: ["Allocate resources", "Switch between processes", "Allocate memory", "Execute programs"], answer: "Switch between processes" },
        { q: "What does virtual memory allow?", options: ["Increase the size of RAM", "Extend the size of physical memory", "Allow more programs to run concurrently", "None of the above"], answer: "Allow more programs to run concurrently" },
        { q: "What is the function of the file manager?", options: ["Manage files", "Control hardware", "Execute programs", "None of the above"], answer: "Manage files" },
        { q: "Which of the following is a type of OS?", options: ["Windows", "Linux", "MacOS", "All of the above"], answer: "All of the above" },
        { q: "What is a system call?", options: ["Function in an OS", "Request for service from OS", "Type of error", "None of the above"], answer: "Request for service from OS" }
    ],
    "C Programming": [
        { q: "Which function is used to print output in C?", options: ["printf()", "scanf()", "cout", "echo"], answer: "printf()" },
        { q: "How do you declare a variable in C?", options: ["int a;", "var a;", "let a;", "int a"], answer: "int a;" },
        { q: "What is the purpose of the main function in C?", options: ["Starting point of program", "To declare variables", "To end program", "None of the above"], answer: "Starting point of program" },
        { q: "Which of these is a valid C loop?", options: ["for", "while", "do-while", "All of the above"], answer: "All of the above" },
        { q: "Which of these is a data type in C?", options: ["int", "char", "float", "All of the above"], answer: "All of the above" },
        { q: "How do you comment in C?", options: ["// comment", "/* comment */", "# comment", "Both 1 and 2"], answer: "Both 1 and 2" },
        { q: "What is the size of an int in C?", options: ["2 bytes", "4 bytes", "8 bytes", "Depends on system"], answer: "4 bytes" },
        { q: "Which of these is an invalid operator in C?", options: ["=", "+", "*", "//"], answer: "//" },
        { q: "Which of these is the correct syntax for a C function?", options: ["function_name(int x)", "int function_name(int x)", "int function_name(x)", "None of the above"], answer: "int function_name(int x)" },
        { q: "Which keyword is used to declare a constant in C?", options: ["const", "final", "static", "constant"], answer: "const" }
    ],
    "Web Application Development": [
        { q: "Which HTML tag is used to display a picture?", options: ["<img>", "<image>", "<picture>", "<src>"], answer: "<img>" },
        { q: "What is the primary purpose of CSS?", options: ["To structure HTML", "To style HTML", "To validate HTML", "To create scripts"], answer: "To style HTML" },
        { q: "Which JavaScript function is used to display data in an alert box?", options: ["alert()", "show()", "message()", "dialog()"], answer: "alert()" },
        { q: "What is the correct HTML tag for a hyperlink?", options: ["<a>", "<link>", "<href>", "<url>"], answer: "<a>" },
        { q: "Which of these is a JavaScript framework?", options: ["React", "Vue", "Angular", "All of the above"], answer: "All of the above" },
        { q: "Which of these is a property of CSS?", options: ["font-size", "margin", "padding", "All of the above"], answer: "All of the above" },
        { q: "Which HTML element is used to define important text?", options: ["<strong>", "<important>", "<b>", "<i>"], answer: "<strong>" },
        { q: "Which JavaScript method is used to parse a string as an integer?", options: ["parseInt()", "toString()", "parseFloat()", "String()"], answer: "parseInt()" },
        { q: "Which tag is used to create an ordered list in HTML?", options: ["<ul>", "<ol>", "<li>", "<list>"], answer: "<ol>" },
        { q: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Cascading Script Sheets"], answer: "Cascading Style Sheets" }
    ],
        "Mathematics": [
            { q: "What is the value of sin(90°)?", options: ["0", "1", "-1", "undefined"], answer: "1" },
            { q: "What is the solution to the equation x^2 - 5x + 6 = 0?", options: ["x = 1, 6", "x = 2, 3", "x = -2, -3", "x = 1, -6"], answer: "x = 2, 3" },
            { q: "What is the integral of x^2?", options: ["x^3/3 + C", "x^2 + C", "x^3 + C", "None of the above"], answer: "x^3/3 + C" },
            { q: "What is the derivative of sin(x)?", options: ["cos(x)", "sin(x)", "-cos(x)", "-sin(x)"], answer: "cos(x)" },
            { q: "What is the sum of the angles in a triangle?", options: ["90°", "180°", "270°", "360°"], answer: "180°" },
            { q: "Which of the following is a prime number?", options: ["4", "9", "11", "15"], answer: "11" },
            { q: "What is the area of a circle with radius r?", options: ["πr", "2πr", "πr^2", "2πr^2"], answer: "πr^2" },
            { q: "Which of these is a rational number?", options: ["√2", "π", "1/3", "e"], answer: "1/3" },
            { q: "What is the value of tan(45°)?", options: ["0", "1", "∞", "-1"], answer: "1" },
            { q: "What is the volume of a sphere with radius r?", options: ["4πr^2", "πr^3", "4/3πr^3", "πr^3/3"], answer: "4/3πr^3" }
        ],
        "C++ Programming": [
            { q: "Which of the following is the correct syntax for a C++ main function?", options: ["int main()", "void main()", "main(int)", "main()"], answer: "int main()" },
            { q: "What is the default value of an uninitialized static variable in C++?", options: ["0", "null", "undefined", "garbage value"], answer: "0" },
            { q: "Which keyword is used to create a class in C++?", options: ["class", "struct", "object", "new"], answer: "class" },
            { q: "Which operator is used to access members of a class in C++?", options: [".", "::", "->", "[]"], answer: "." },
            { q: "What is the purpose of the constructor in C++?", options: ["Initialize objects", "Free memory", "Store values", "None of the above"], answer: "Initialize objects" },
            { q: "Which of the following is a valid data type in C++?", options: ["int", "float", "char", "All of the above"], answer: "All of the above" },
            { q: "Which of the following is the correct way to define a pointer?", options: ["*ptr", "ptr*", "&ptr", "pointer ptr"], answer: "ptr*" },
            { q: "Which of these is not an access modifier in C++?", options: ["public", "private", "protected", "readonly"], answer: "readonly" },
            { q: "Which operator is used for dynamic memory allocation in C++?", options: ["new", "malloc", "calloc", "free"], answer: "new" },
            { q: "Which of the following is the correct way to declare a function in C++?", options: ["function add(int a, int b)", "void add(int a, int b)", "int add(a, b)", "int add(a, b):"], answer: "void add(int a, int b)" }
        ],
        "Database Management Systems": [
            { q: "Which of the following is not a type of DBMS?", options: ["Hierarchical", "Network", "Relational", "Object-Oriented", "Object-Relational", "NoSQL", "MongoDB"], answer: "MongoDB" },
            { q: "What is the SQL command to retrieve data from a database?", options: ["SELECT", "GET", "FETCH", "PULL"], answer: "SELECT" },
            { q: "Which SQL keyword is used to sort the result set?", options: ["ORDER BY", "SORT", "GROUP BY", "FILTER"], answer: "ORDER BY" },
            { q: "What is the purpose of a primary key?", options: ["Uniquely identifies each record", "Links two tables together", "Defines relationships", "None of the above"], answer: "Uniquely identifies each record" },
            { q: "Which of the following is a relational database management system?", options: ["Oracle", "MongoDB", "SQLite", "All of the above"], answer: "Oracle" },
            { q: "What is the use of a foreign key?", options: ["Uniquely identifies a record", "Creates relationships between tables", "Stores sensitive data", "None of the above"], answer: "Creates relationships between tables" },
            { q: "Which command is used to remove a table from the database?", options: ["DROP", "DELETE", "REMOVE", "CLEAR"], answer: "DROP" },
            { q: "What does SQL stand for?", options: ["Structured Query Language", "Simple Query Language", "Sequential Query Language", "Standard Query Language"], answer: "Structured Query Language" },
            { q: "Which of these is used to uniquely identify a row in a database table?", options: ["Primary Key", "Foreign Key", "Index", "Trigger"], answer: "Primary Key" },
            { q: "Which operation is used to combine rows from two or more tables in SQL?", options: ["JOIN", "UNION", "INTERSECT", "ALL"], answer: "JOIN" }
        ],
        "Software Engineering": [
            { q: "What is the primary objective of software engineering?", options: ["Efficiency", "Maintainability", "Reliability", "All of the above"], answer: "All of the above" },
            { q: "Which model is the most widely used for software development?", options: ["Waterfall Model", "Agile Model", "V-Model", "Spiral Model"], answer: "Agile Model" },
            { q: "What does 'refactoring' mean in software engineering?", options: ["Rewriting the entire program", "Improving the structure of existing code", "Removing bugs", "Adding new features"], answer: "Improving the structure of existing code" },
            { q: "What is the main focus of the 'testing' phase in software development?", options: ["Finding defects", "Optimizing performance", "Adding features", "Updating documentation"], answer: "Finding defects" },
            { q: "Which of the following is a software development methodology?", options: ["Agile", "Waterfall", "Scrum", "All of the above"], answer: "All of the above" },
            { q: "What is an important characteristic of a well-designed software?", options: ["High modularity", "Low complexity", "High maintainability", "All of the above"], answer: "All of the above" },
            { q: "Which of the following is not a software requirement?", options: ["Functional requirement", "Non-functional requirement", "Hardware requirement", "None of the above"], answer: "Hardware requirement" },
            { q: "What is 'version control'?", options: ["Tracking changes to the codebase", "Managing the project budget", "Testing the application", "Scheduling tasks"], answer: "Tracking changes to the codebase" },
            { q: "Which of the following is a type of software testing?", options: ["Unit testing", "Integration testing", "System testing", "All of the above"], answer: "All of the above" },
            { q: "What is 'agile development'?", options: ["Iterative software development", "Linear development process", "Methodology with no changes", "None of the above"], answer: "Iterative software development" }
        ],
        "Data Structures and Algorithms": [
            { q: "What is a linked list?", options: ["Array of elements", "Data structure with nodes", "Tree structure", "Graph of nodes"], answer: "Data structure with nodes" },
            { q: "Which of these sorting algorithms is the fastest?", options: ["Bubble Sort", "Quick Sort", "Selection Sort", "Merge Sort"], answer: "Quick Sort" },
            { q: "Which of these is a linear data structure?", options: ["Linked List", "Tree", "Graph", "Hash Table"], answer: "Linked List" },
            { q: "Which data structure is used in a breadth-first search?", options: ["Stack", "Queue", "Array", "Linked List"], answer: "Queue" },
            { q: "Which of these is not a type of tree?", options: ["Binary Tree", "Binary Search Tree", "AVL Tree", "Linked Tree"], answer: "Linked Tree" },
            { q: "What is the time complexity of accessing an element in an array?", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], answer: "O(1)" },
            { q: "Which algorithm is used to find the shortest path in a graph?", options: ["Dijkstra's Algorithm", "Prim's Algorithm", "Kruskal's Algorithm", "Floyd-Warshall Algorithm"], answer: "Dijkstra's Algorithm" },
            { q: "What is the time complexity of Merge Sort?", options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"], answer: "O(n log n)" },
            { q: "Which data structure is used for Depth First Search?", options: ["Queue", "Stack", "Array", "Linked List"], answer: "Stack" },
            { q: "Which data structure is used to implement recursion?", options: ["Queue", "Stack", "List", "Tree"], answer: "Stack" }
        ],
        "Cloud Computing": [
            { q: "Which of these is a cloud service model?", options: ["IaaS", "PaaS", "SaaS", "All of the above"], answer: "All of the above" },
            { q: "What is the primary advantage of cloud computing?", options: ["Scalability", "Cost-effectiveness", "Accessibility", "All of the above"], answer: "All of the above" },
            { q: "Which of these is not a cloud provider?", options: ["Amazon Web Services", "Microsoft Azure", "Google Cloud", "Dell Cloud"], answer: "Dell Cloud" },
            { q: "What is a public cloud?", options: ["Cloud infrastructure shared by multiple organizations", "Cloud infrastructure used by a single organization", "Cloud service available to a single user", "None of the above"], answer: "Cloud infrastructure shared by multiple organizations" },
            { q: "What is the role of a hypervisor in cloud computing?", options: ["Run multiple virtual machines", "Manage storage", "Secure data", "Manage users"], answer: "Run multiple virtual machines" },
            { q: "Which of these is a characteristic of a private cloud?", options: ["Managed by third party", "Exclusive use by a single organization", "Shared resources", "None of the above"], answer: "Exclusive use by a single organization" },
            { q: "Which type of cloud computing allows users to access applications over the internet?", options: ["IaaS", "PaaS", "SaaS", "None of the above"], answer: "SaaS" },
            { q: "What does the term 'virtualization' mean in cloud computing?", options: ["Running applications remotely", "Creating virtual versions of physical resources", "Sharing resources", "None of the above"], answer: "Creating virtual versions of physical resources" },
            { q: "Which of the following is a benefit of cloud storage?", options: ["Scalability", "Security", "Cost savings", "All of the above"], answer: "All of the above" },
            { q: "What is 'elasticity' in cloud computing?", options: ["The ability to scale resources up and down quickly", "The cost of resources", "The speed of the internet", "None of the above"], answer: "The ability to scale resources up and down quickly" }
        ],
        "Data Science": [
            { q: "What does Data Science involve?", options: ["Data analysis", "Machine learning", "Data visualization", "All of the above"], answer: "All of the above" },
            { q: "Which programming language is commonly used for Data Science?", options: ["Python", "Java", "C", "Ruby"], answer: "Python" },
            { q: "Which of these libraries is used for data manipulation in Python?", options: ["Matplotlib", "NumPy", "Pandas", "Scikit-learn"], answer: "Pandas" },
            { q: "What is the purpose of machine learning in Data Science?", options: ["To analyze data", "To build predictive models", "To visualize data", "None of the above"], answer: "To build predictive models" },
            { q: "What is a data set?", options: ["Collection of data", "A model for predictions", "A visualization", "A storage medium"], answer: "Collection of data" },
            { q: "Which of these techniques is used in supervised learning?", options: ["Classification", "Clustering", "Dimensionality Reduction", "None of the above"], answer: "Classification" },
            { q: "Which of the following is an unsupervised learning technique?", options: ["Linear Regression", "K-means clustering", "Decision Trees", "Random Forest"], answer: "K-means clustering" },
            { q: "Which of these is used to evaluate the performance of a model in Data Science?", options: ["Accuracy", "Confusion Matrix", "Precision", "All of the above"], answer: "All of the above" },
            { q: "What does 'Big Data' refer to?", options: ["Large volumes of data", "Data with complex structure", "Data that cannot be processed by traditional methods", "All of the above"], answer: "All of the above" },
            { q: "What is the goal of Data Science?", options: ["Extract knowledge from data", "Build machine learning models", "Visualize data", "All of the above"], answer: "Extract knowledge from data" }
        ],
        
            "Java Programming": [
                { q: "Which of the following is used to declare a class in Java?", options: ["class ClassName", "class: ClassName", "ClassName class", "None of the above"], answer: "class ClassName" },
                { q: "Which of these is not a valid data type in Java?", options: ["int", "float", "double", "string"], answer: "string" },
                { q: "Which keyword is used to create an object in Java?", options: ["create", "new", "object", "init"], answer: "new" },
                { q: "Which of the following is used for single-line comments in Java?", options: ["//", "/* */", "#", "*/"], answer: "//" },
                { q: "Which method is the entry point of any Java program?", options: ["init()", "start()", "main()", "begin()"], answer: "main()" },
                { q: "Which of these collections does not allow duplicate elements?", options: ["List", "Set", "Map", "Queue"], answer: "Set" },
                { q: "Which exception is thrown by the division operator when dividing by zero?", options: ["ArithmeticException", "NullPointerException", "IOException", "FileNotFoundException"], answer: "ArithmeticException" },
                { q: "What is the default value of a boolean in Java?", options: ["false", "true", "null", "0"], answer: "false" },
                { q: "Which of the following is used for method overloading in Java?", options: ["Changing method return type", "Changing the number of parameters", "Changing method signature", "Changing method name"], answer: "Changing the number of parameters" },
                { q: "Which of these classes is used for handling exceptions in Java?", options: ["IOException", "FileNotFoundException", "Exception", "All of the above"], answer: "All of the above" }
            ],
            "Python Programming": [
                { q: "What is the output of print(2**3)?", options: ["6", "8", "9", "7"], answer: "8" },
                { q: "How do you define a function in Python?", options: ["def myFunction()", "function myFunction()", "func myFunction()", "None of the above"], answer: "def myFunction()" },
                { q: "Which data type is immutable in Python?", options: ["List", "Tuple", "Dictionary", "Set"], answer: "Tuple" },
                { q: "Which function is used to get the length of a string?", options: ["length()", "len()", "size()", "count()"], answer: "len()" },
                { q: "Which operator is used for floor division in Python?", options: ["/", "//", "%", "^"], answer: "//" },
                { q: "What is the result of 10 // 3 in Python?", options: ["3", "3.0", "3.33", "None of the above"], answer: "3" },
                { q: "What does the range() function do in Python?", options: ["Generates a sequence of numbers", "Generates a list of numbers", "Creates a tuple", "None of the above"], answer: "Generates a sequence of numbers" },
                { q: "Which of the following is used to import modules in Python?", options: ["import module", "include module", "from module import *", "import * from module"], answer: "import module" },
                { q: "What is the purpose of the __init__() method in Python?", options: ["It initializes the class", "It initializes an object", "It initializes a method", "It initializes a function"], answer: "It initializes an object" },
                { q: "Which of these data structures are supported by Python?", options: ["List", "Dictionary", "Set", "All of the above"], answer: "All of the above" }
            ],
            "Data Communication & Computer Networks": [
                { q: "What is the main function of a router?", options: ["Forwarding data packets", "Data encryption", "Connecting local networks", "Firewall protection"], answer: "Forwarding data packets" },
                { q: "Which layer of the OSI model is responsible for data encryption?", options: ["Network layer", "Data link layer", "Transport layer", "Presentation layer"], answer: "Presentation layer" },
                { q: "Which of these protocols is used for email communication?", options: ["HTTP", "FTP", "SMTP", "POP3"], answer: "SMTP" },
                { q: "What does 'IP' stand for?", options: ["Internet Protocol", "Internet Port", "Internal Protocol", "Integrated Protocol"], answer: "Internet Protocol" },
                { q: "Which of the following is a type of guided transmission medium?", options: ["Radio waves", "Microwave", "Fiber optic cable", "Satellite communication"], answer: "Fiber optic cable" },
                { q: "Which network topology has a central node connected to all others?", options: ["Bus", "Star", "Ring", "Mesh"], answer: "Star" },
                { q: "Which of these is a common wireless transmission technology?", options: ["Bluetooth", "Ethernet", "Fiber optic", "Coaxial cable"], answer: "Bluetooth" },
                { q: "Which of the following is true for the OSI model?", options: ["It has 5 layers", "It is used to design network protocols", "It defines the data link layer only", "It has 3 layers"], answer: "It is used to design network protocols" },
                { q: "Which of these is a type of error detection in data communication?", options: ["CRC", "Parity check", "Checksums", "All of the above"], answer: "All of the above" },
                { q: "Which layer in the OSI model is responsible for error handling and flow control?", options: ["Data Link Layer", "Network Layer", "Transport Layer", "Session Layer"], answer: "Transport Layer" }
            ],
            "Artificial Intelligence": [
                { q: "Which of the following is an example of supervised learning?", options: ["Decision trees", "K-means clustering", "Neural networks", "None of the above"], answer: "Decision trees" },
                { q: "What is a perceptron?", options: ["A type of decision tree", "A type of neural network", "A type of supervised learning algorithm", "None of the above"], answer: "A type of neural network" },
                { q: "What is the main objective of the Turing Test?", options: ["To determine if a machine can simulate human behavior", "To test the learning capabilities of an AI", "To check a machine’s processing speed", "None of the above"], answer: "To determine if a machine can simulate human behavior" },
                { q: "Which of these algorithms is used in supervised learning?", options: ["Support vector machines", "K-means clustering", "Genetic algorithms", "None of the above"], answer: "Support vector machines" },
                { q: "What does AI stand for?", options: ["Automated Intelligence", "Artificial Intelligence", "Advanced Intelligence", "Analytical Intelligence"], answer: "Artificial Intelligence" },
                { q: "Which of these is a reinforcement learning algorithm?", options: ["Q-learning", "K-means", "Random Forest", "Naive Bayes"], answer: "Q-learning" },
                { q: "What is a neural network?", options: ["A programming model", "A biological-inspired system to process data", "A hardware system", "None of the above"], answer: "A biological-inspired system to process data" },
                { q: "Which of these is used for natural language processing?", options: ["Text classification", "Speech recognition", "Machine translation", "All of the above"], answer: "All of the above" },
                { q: "Which type of AI technique is used in self-driving cars?", options: ["Reinforcement learning", "Deep learning", "Supervised learning", "Unsupervised learning"], answer: "Deep learning" },
                { q: "Which algorithm is used for unsupervised learning?", options: ["K-means clustering", "Logistic regression", "Support vector machine", "Linear regression"], answer: "K-means clustering" }
            ],
            "Digital Marketing": [
                { q: "Which of these is a form of online marketing?", options: ["SEO", "Social Media Marketing", "Email Marketing", "All of the above"], answer: "All of the above" },
                { q: "What is SEO?", options: ["Search Engine Optimization", "Social Engine Optimization", "Standard Engine Optimization", "None of the above"], answer: "Search Engine Optimization" },
                { q: "What is the main goal of digital marketing?", options: ["Brand awareness", "Sales conversion", "Customer engagement", "All of the above"], answer: "All of the above" },
                { q: "Which of these is a paid form of digital marketing?", options: ["Pay-per-click", "SEO", "Content Marketing", "Email Marketing"], answer: "Pay-per-click" },
                { q: "What is the purpose of content marketing?", options: ["To drive traffic", "To educate customers", "To increase brand awareness", "All of the above"], answer: "All of the above" },
                { q: "Which platform is best for B2B digital marketing?", options: ["Facebook", "LinkedIn", "Instagram", "TikTok"], answer: "LinkedIn" },
                { q: "Which of the following is a key performance indicator for digital marketing?", options: ["Website traffic", "Conversion rate", "Email open rate", "All of the above"], answer: "All of the above" },
                { q: "What does PPC stand for?", options: ["Pay Per Click", "Page Per Click", "Price Per Click", "Public Per Click"], answer: "Pay Per Click" },
                { q: "Which of these is used in email marketing?", options: ["Email list segmentation", "A/B testing", "Personalized content", "All of the above"], answer: "All of the above" },
                { q: "Which of these is a social media platform?", options: ["Facebook", "Instagram", "Twitter", "All of the above"], answer: "All of the above" }
            ],
            "Machine Learning": [
                { q: "Which of the following is a supervised learning algorithm?", options: ["K-means", "Linear Regression", "K-Nearest Neighbors", "All of the above"], answer: "Linear Regression" },
                { q: "What is overfitting in machine learning?", options: ["When the model is too simple", "When the model fits the training data too closely", "When the model cannot generalize to new data", "Both b and c"], answer: "Both b and c" },
                { q: "What is cross-validation?", options: ["A technique for splitting data", "A method for evaluating model performance", "A method for scaling features", "None of the above"], answer: "A method for evaluating model performance" },
                { q: "Which of these is a common activation function?", options: ["ReLU", "Sigmoid", "Tanh", "All of the above"], answer: "All of the above" },
                { q: "What is the purpose of feature scaling?", options: ["To normalize data", "To prevent bias", "To speed up the training process", "All of the above"], answer: "All of the above" },
                { q: "Which of the following is used for dimensionality reduction?", options: ["Principal Component Analysis", "Linear Regression", "Support Vector Machine", "None of the above"], answer: "Principal Component Analysis" },
                { q: "Which of these is an unsupervised learning technique?", options: ["Clustering", "Classification", "Regression", "None of the above"], answer: "Clustering" },
                { q: "What is a confusion matrix used for?", options: ["To evaluate classification models", "To evaluate regression models", "To split data", "None of the above"], answer: "To evaluate classification models" },
                { q: "Which of the following is an ensemble method?", options: ["Random Forest", "Linear Regression", "K-Nearest Neighbors", "Decision Tree"], answer: "Random Forest" },
                { q: "Which technique is used for model evaluation?", options: ["Confusion Matrix", "Cross-validation", "Train-Test Split", "All of the above"], answer: "All of the above" }
            ],
            
                "Computer Organization and Architecture": [
                    { q: "What is the function of the ALU in a computer?", options: ["Control data flow", "Execute arithmetic and logical operations", "Store data", "Perform input/output operations"], answer: "Execute arithmetic and logical operations" },
                    { q: "Which of the following is the primary function of the control unit?", options: ["Manage the CPU registers", "Interpret instructions", "Perform arithmetic calculations", "Fetch data from memory"], answer: "Interpret instructions" },
                    { q: "What is the size of an address bus in a 16-bit computer system?", options: ["16 bits", "32 bits", "64 bits", "8 bits"], answer: "16 bits" },
                    { q: "Which of these is a type of computer memory that is both read and write?", options: ["ROM", "RAM", "Cache", "Flash"], answer: "RAM" },
                    { q: "In which type of memory are programs stored that are needed for the computer to boot?", options: ["RAM", "ROM", "Cache", "Flash"], answer: "ROM" },
                    { q: "Which is the smallest unit of data in a computer?", options: ["Byte", "Bit", "Word", "Nibble"], answer: "Bit" },
                    { q: "What does the term 'bus' refer to in a computer system?", options: ["A type of memory", "A pathway for data transfer", "A control unit", "A storage device"], answer: "A pathway for data transfer" },
                    { q: "What is the main purpose of a register in a computer?", options: ["Store data temporarily", "Execute calculations", "Control data flow", "Manage input/output operations"], answer: "Store data temporarily" },
                    { q: "Which of the following is not a type of computer architecture?", options: ["Von Neumann", "Harvard", "Neumann-Turing", "RISC"], answer: "Neumann-Turing" },
                    { q: "What is the role of the clock in a computer system?", options: ["Control timing of operations", "Store data", "Manage memory", "Process instructions"], answer: "Control timing of operations" }
                ],
                "Data Structures and Algorithms": [
                    { q: "Which data structure is used to store elements in a Last-In-First-Out (LIFO) order?", options: ["Queue", "Stack", "Array", "Linked List"], answer: "Stack" },
                    { q: "Which algorithm is used to find the shortest path in a graph?", options: ["Dijkstra's algorithm", "Breadth-first search", "Binary search", "Quick sort"], answer: "Dijkstra's algorithm" },
                    { q: "What is the time complexity of the binary search algorithm?", options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"], answer: "O(log n)" },
                    { q: "Which of the following is a characteristic of a binary tree?", options: ["Each node has at most two children", "Each node can have any number of children", "Nodes are linked in a circular manner", "None of the above"], answer: "Each node has at most two children" },
                    { q: "Which of the following is not a type of graph traversal?", options: ["Pre-order", "In-order", "Post-order", "Breadth-first search"], answer: "Pre-order" },
                    { q: "Which data structure is used for implementing recursion?", options: ["Queue", "Stack", "Graph", "Linked List"], answer: "Stack" },
                    { q: "What is the space complexity of quicksort in the worst case?", options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"], answer: "O(n)" },
                    { q: "Which of the following algorithms is used for sorting elements?", options: ["Dijkstra's algorithm", "Quick sort", "Breadth-first search", "DFS"], answer: "Quick sort" },
                    { q: "In a linked list, which pointer is used to store the address of the first node?", options: ["Previous pointer", "Next pointer", "Head pointer", "Tail pointer"], answer: "Head pointer" },
                    { q: "What is the time complexity of bubble sort in the worst case?", options: ["O(n)", "O(n^2)", "O(log n)", "O(n log n)"], answer: "O(n^2)" }
                ],
                "Operating Systems": [
                    { q: "Which of these is an example of a process state in an operating system?", options: ["Running", "Blocked", "Ready", "All of the above"], answer: "All of the above" },
                    { q: "What is the main purpose of an operating system?", options: ["Manage hardware resources", "Provide an interface to the user", "Manage processes and tasks", "All of the above"], answer: "All of the above" },
                    { q: "Which of the following is not a function of the operating system?", options: ["Memory management", "Task scheduling", "Network management", "Video rendering"], answer: "Video rendering" },
                    { q: "What is a process in an operating system?", options: ["A running program", "A suspended program", "An executing program", "None of the above"], answer: "A running program" },
                    { q: "Which of the following is responsible for managing the CPU?", options: ["Memory manager", "CPU scheduler", "File system", "Disk manager"], answer: "CPU scheduler" },
                    { q: "Which of the following is a type of operating system?", options: ["Batch operating system", "Real-time operating system", "Multiprogramming operating system", "All of the above"], answer: "All of the above" },
                    { q: "Which of these is used for synchronization between processes?", options: ["Mutex", "Semaphore", "Monitors", "All of the above"], answer: "All of the above" },
                    { q: "Which type of operating system allows multiple users to execute programs simultaneously?", options: ["Single-user OS", "Multi-user OS", "Real-time OS", "None of the above"], answer: "Multi-user OS" },
                    { q: "What is deadlock in operating systems?", options: ["When two or more processes are waiting for each other to release resources", "When a process completes execution", "When a process is blocked", "None of the above"], answer: "When two or more processes are waiting for each other to release resources" },
                    { q: "Which of the following is a part of the operating system's kernel?", options: ["File management", "Process management", "Memory management", "All of the above"], answer: "All of the above" }
                ],
                "Database Management Systems": [
                    { q: "Which of the following is used to uniquely identify a record in a database?", options: ["Foreign key", "Primary key", "Composite key", "None of the above"], answer: "Primary key" },
                    { q: "What does SQL stand for?", options: ["Structured Query Language", "System Query Language", "Sequential Query Language", "Standard Query Language"], answer: "Structured Query Language" },
                    { q: "Which of the following is a type of JOIN operation in SQL?", options: ["INNER JOIN", "OUTER JOIN", "CROSS JOIN", "All of the above"], answer: "All of the above" },
                    { q: "Which SQL command is used to remove data from a database?", options: ["REMOVE", "DELETE", "DROP", "TRUNCATE"], answer: "DELETE" },
                    { q: "Which of these is not a type of database?", options: ["Relational database", "NoSQL database", "Graph database", "All of the above are types"], answer: "All of the above are types" },
                    { q: "What is normalization in databases?", options: ["Combining related data", "Removing redundant data", "Encrypting sensitive data", "Splitting tables into multiple tables"], answer: "Removing redundant data" },
                    { q: "Which of the following is a database constraint?", options: ["Primary key", "Foreign key", "Not null", "All of the above"], answer: "All of the above" },
                    { q: "What does ACID stand for in database management?", options: ["Atomicity, Consistency, Isolation, Durability", "Automation, Consistency, Isolation, Durability", "Atomicity, Compression, Isolation, Durability", "None of the above"], answer: "Atomicity, Consistency, Isolation, Durability" },
                    { q: "Which of the following is a type of database relationship?", options: ["One-to-One", "One-to-Many", "Many-to-Many", "All of the above"], answer: "All of the above" },
                    { q: "Which command is used to add a new record to a database?", options: ["INSERT", "UPDATE", "SELECT", "REMOVE"], answer: "INSERT" }
                ],
                "Programming with C/C++ or Java": [
                    { q: "Which of the following is used to declare a function in C/C++?", options: ["def myFunction()", "function myFunction()", "void myFunction()", "None of the above"], answer: "void myFunction()" },
                    { q: "Which of these data types does not exist in C/C++?", options: ["int", "float", "double", "string"], answer: "string" },
                    { q: "Which function is used to get the length of a string in C?", options: ["strlen()", "length()", "getLength()", "sizeof()"], answer: "strlen()" },
                    { q: "In C++, what is the operator used to access class members?", options: ["->", ".", "::", "::="], answer: "." },
                    { q: "What does the 'main' function return in C?", options: ["int", "void", "float", "None of the above"], answer: "int" },
                    { q: "Which of the following is the correct syntax for a loop in C?", options: ["for(i=0; i<5; i++)", "for(i<5; i++)", "loop(i<5; i++)", "foreach(i<5)"], answer: "for(i=0; i<5; i++)" },
                    { q: "Which of these are not valid comments in Java?", options: ["// Single line comment", "/* Multi-line comment */", "<!-- Comment -->", "/* Another multi-line comment */"], answer: "<!-- Comment -->" },
                    { q: "What is the default value of an integer variable in Java?", options: ["0", "null", "undefined", "false"], answer: "0" },
                    { q: "Which of the following is the correct syntax to declare an array in Java?", options: ["int[] arr", "int arr[]", "int arr[10]", "array arr[]"], answer: "int[] arr" },
                    { q: "What is the purpose of the 'final' keyword in Java?", options: ["It makes a variable constant", "It makes a method non-overridable", "It prevents inheritance", "All of the above"], answer: "All of the above" }
                ],
                "Discrete Mathematics": [
                    { q: "What is the total number of vertices in a complete graph of n vertices?", options: ["n", "n(n-1)/2", "2^n", "n^2"], answer: "n" },
                    { q: "Which of these is not a set operation?", options: ["Union", "Intersection", "Subtraction", "Multiplication"], answer: "Multiplication" },
                    { q: "What is a bijection?", options: ["A one-to-one mapping between two sets", "A function that is both injective and surjective", "A one-to-many mapping", "Both a and b"], answer: "Both a and b" },
                    { q: "Which of the following is not a type of graph?", options: ["Complete graph", "Tree", "Circuit", "Regular graph"], answer: "Circuit" },
                    { q: "Which of the following is a Boolean operator?", options: ["AND", "OR", "NOT", "All of the above"], answer: "All of the above" },
                    { q: "What is the principle of mathematical induction?", options: ["To prove statements for all integers", "To prove statements for specific cases", "To prove statements for all real numbers", "None of the above"], answer: "To prove statements for all integers" },
                    { q: "Which of these is a common logic gate?", options: ["AND", "OR", "NOT", "All of the above"], answer: "All of the above" },
                    { q: "What is a tautology in logic?", options: ["A statement that is always true", "A statement that is always false", "A conditional statement", "None of the above"], answer: "A statement that is always true" },
                    { q: "Which of these is a method for counting in combinatorics?", options: ["Permutations", "Combinations", "Factorials", "All of the above"], answer: "All of the above" },
                    { q: "Which of the following defines the power set of a set?", options: ["The set of all subsets of a set", "The set of all elements of a set", "The set of all elements of a set raised to the power", "None of the above"], answer: "The set of all subsets of a set" }
                ],
               
                    "Software Engineering": [
                        { q: "What is the primary goal of software engineering?", options: ["To write error-free code", "To develop software systems within budget", "To develop reliable and maintainable software", "To learn new programming languages"], answer: "To develop reliable and maintainable software" },
                        { q: "Which of the following is not a software development methodology?", options: ["Agile", "Waterfall", "V-Model", "Java"], answer: "Java" },
                        { q: "Which model is known as the 'Waterfall' model?", options: ["Linear Sequential Model", "Spiral Model", "Prototyping Model", "Incremental Model"], answer: "Linear Sequential Model" },
                        { q: "What is the primary purpose of software testing?", options: ["To find and fix bugs", "To ensure software runs efficiently", "To validate the performance of the system", "To improve software usability"], answer: "To find and fix bugs" },
                        { q: "Which of these is a type of software requirement?", options: ["Functional requirement", "Non-functional requirement", "Both A and B", "None of the above"], answer: "Both A and B" },
                        { q: "What is a 'use case' in software engineering?", options: ["A diagram to describe the software components", "A description of how a user interacts with the system", "A method to detect bugs", "A testing strategy"], answer: "A description of how a user interacts with the system" },
                        { q: "What is the purpose of a 'version control' system?", options: ["To manage software versions and track changes", "To store final versions of the software", "To test the software", "To measure the system's performance"], answer: "To manage software versions and track changes" },
                        { q: "What is refactoring in software engineering?", options: ["Improving the design of existing code without changing its functionality", "Removing bugs from the code", "Adding new features to the system", "Testing the software for errors"], answer: "Improving the design of existing code without changing its functionality" },
                        { q: "Which of the following is an example of a software development tool?", options: ["IDE", "Compiler", "Debugger", "All of the above"], answer: "All of the above" },
                        { q: "Which phase comes first in the software development life cycle?", options: ["Design", "Development", "Testing", "Requirement analysis"], answer: "Requirement analysis" }
                    ],
                    "Computer Networks": [
                        { q: "Which of the following layers of the OSI model is responsible for data transmission?", options: ["Network layer", "Data link layer", "Physical layer", "Transport layer"], answer: "Physical layer" },
                        { q: "Which protocol is used for web browsing?", options: ["FTP", "HTTP", "SMTP", "DNS"], answer: "HTTP" },
                        { q: "What does the TCP/IP model stand for?", options: ["Transmission Control Protocol/Internet Protocol", "Transport Control Protocol/Internet Protocol", "Transfer Control Protocol/Internet Protocol", "Transmission Communication Protocol/Internet Protocol"], answer: "Transmission Control Protocol/Internet Protocol" },
                        { q: "Which of these is a common networking device?", options: ["Router", "Switch", "Hub", "All of the above"], answer: "All of the above" },
                        { q: "What is the purpose of the 'subnet mask' in IP networking?", options: ["To determine the size of the network", "To encrypt data", "To route traffic", "To identify the network address"], answer: "To determine the size of the network" },
                        { q: "What is the maximum length of an Ethernet cable?", options: ["100 meters", "200 meters", "500 meters", "1000 meters"], answer: "100 meters" },
                        { q: "What does a DNS server do?", options: ["Translate domain names to IP addresses", "Manage network traffic", "Encrypt data", "Filter internet traffic"], answer: "Translate domain names to IP addresses" },
                        { q: "What type of connection does a VPN create?", options: ["Encrypted", "Unsecured", "Wireless", "Wired"], answer: "Encrypted" },
                        { q: "What is the primary function of a router?", options: ["Direct traffic between different networks", "Connect devices on a single network", "Provide wireless access", "Block incoming traffic"], answer: "Direct traffic between different networks" },
                        { q: "What is the full form of 'IP' in networking?", options: ["Internet Protocol", "Internet Process", "International Protocol", "Internal Process"], answer: "Internet Protocol" }
                    ],
                    "Machine Learning": [
                        { q: "Which of these is a supervised learning algorithm?", options: ["K-Means Clustering", "Linear Regression", "DBSCAN", "PCA"], answer: "Linear Regression" },
                        { q: "Which metric is commonly used to evaluate the performance of a classification model?", options: ["Accuracy", "Mean Squared Error", "Precision", "F1 Score"], answer: "Accuracy" },
                        { q: "What is the purpose of overfitting in machine learning?", options: ["To create a model that generalizes well", "To create a model that performs well on unseen data", "To create a model that fits the training data too well", "To simplify the model"], answer: "To create a model that fits the training data too well" },
                        { q: "Which of the following is a type of machine learning?", options: ["Supervised learning", "Unsupervised learning", "Reinforcement learning", "All of the above"], answer: "All of the above" },
                        { q: "What does the term 'training data' refer to in machine learning?", options: ["Data used to evaluate model performance", "Data used to make predictions", "Data used to train the model", "Data used to test the model"], answer: "Data used to train the model" },
                        { q: "Which algorithm is commonly used for clustering data?", options: ["K-Means", "Logistic Regression", "Decision Trees", "Linear Regression"], answer: "K-Means" },
                        { q: "What is the purpose of regularization in machine learning?", options: ["To increase the model's complexity", "To prevent overfitting", "To reduce the amount of training data", "To improve model accuracy"], answer: "To prevent overfitting" },
                        { q: "Which of the following is used for dimensionality reduction?", options: ["PCA", "K-Means", "Linear Regression", "Random Forest"], answer: "PCA" },
                        { q: "Which of the following is an unsupervised learning technique?", options: ["Support Vector Machine", "K-Means Clustering", "Logistic Regression", "Neural Networks"], answer: "K-Means Clustering" },
                        { q: "What is cross-validation in machine learning?", options: ["A method to tune hyperparameters", "A method to prevent overfitting", "A technique to evaluate model performance", "A method to increase data size"], answer: "A technique to evaluate model performance" }
                    ],
                    "Cloud Computing": [
                        { q: "What is the primary characteristic of cloud computing?", options: ["On-demand access to computing resources", "Unlimited storage capacity", "High latency", "All of the above"], answer: "On-demand access to computing resources" },
                        { q: "Which of these is a popular cloud service provider?", options: ["Amazon Web Services (AWS)", "Google Cloud", "Microsoft Azure", "All of the above"], answer: "All of the above" },
                        { q: "What does 'IaaS' stand for?", options: ["Infrastructure as a Service", "Information as a Service", "Internet as a Service", "Integration as a Service"], answer: "Infrastructure as a Service" },
                        { q: "What is the benefit of using cloud storage?", options: ["Reduced hardware costs", "Scalability", "Remote access to data", "All of the above"], answer: "All of the above" },
                        { q: "What does 'SaaS' stand for?", options: ["Software as a Service", "System as a Service", "Storage as a Service", "Security as a Service"], answer: "Software as a Service" },
                        { q: "Which of the following is a key benefit of using cloud computing?", options: ["Cost-efficiency", "Scalability", "Flexibility", "All of the above"], answer: "All of the above" },
                        { q: "Which type of cloud computing service provides virtual machines and storage?", options: ["IaaS", "PaaS", "SaaS", "CaaS"], answer: "IaaS" },
                        { q: "Which of these is not a cloud deployment model?", options: ["Private cloud", "Public cloud", "Hybrid cloud", "Dynamic cloud"], answer: "Dynamic cloud" },
                        { q: "What is 'scalability' in cloud computing?", options: ["The ability to increase or decrease resources based on demand", "The ability to increase storage capacity", "The ability to maintain data consistency", "The ability to monitor network traffic"], answer: "The ability to increase or decrease resources based on demand" },
                        { q: "What is the primary difference between public and private clouds?", options: ["Private clouds are owned by third parties", "Public clouds are more secure", "Public clouds are accessible over the internet, private clouds are not", "Private clouds are hosted on-premise"], answer: "Public clouds are accessible over the internet, private clouds are not" }
                    ],
                    "Data Science": [
                        { q: "What is the purpose of exploratory data analysis (EDA)?", options: ["To clean the data", "To understand the structure of the data", "To build predictive models", "To visualize the data"], answer: "To understand the structure of the data" },
                        { q: "Which of these is an example of structured data?", options: ["CSV files", "Text documents", "Images", "Audio files"], answer: "CSV files" },
                        { q: "What is the primary function of feature engineering in data science?", options: ["To remove outliers", "To create new features from raw data", "To collect data", "To visualize the data"], answer: "To create new features from raw data" },
                        { q: "Which algorithm is often used for classification problems?", options: ["Linear regression", "Logistic regression", "K-Means", "PCA"], answer: "Logistic regression" },
                        { q: "Which of these is used for measuring the performance of a classification model?", options: ["Confusion matrix", "MSE", "RMSE", "ROC curve"], answer: "Confusion matrix" },
                        { q: "What is the purpose of a decision tree in data science?", options: ["To classify data based on features", "To cluster similar data", "To reduce data dimensionality", "To perform regression analysis"], answer: "To classify data based on features" },
                        { q: "What does the 'normalization' process do in data preprocessing?", options: ["Reduces the data size", "Converts data into a standard format", "Removes missing values", "All of the above"], answer: "Converts data into a standard format" },
                        { q: "Which of these tools is commonly used for data visualization?", options: ["Tableau", "Matplotlib", "Power BI", "All of the above"], answer: "All of the above" },
                        { q: "Which of these is a feature of supervised learning?", options: ["Labeled data", "Unlabeled data", "Data without labels", "Data with random noise"], answer: "Labeled data" },
                        { q: "Which technique is used to reduce dimensionality in large datasets?", options: ["PCA", "K-Means", "Random Forest", "Linear Regression"], answer: "PCA" }
                    ],
                    "Cybersecurity": [
                        { q: "What is the primary purpose of encryption?", options: ["To protect data during transmission", "To compress files", "To backup data", "To optimize the performance of networks"], answer: "To protect data during transmission" },
                        { q: "What does a firewall do?", options: ["Blocks unauthorized access to a network", "Scans for malware", "Stores encrypted files", "Backs up data"], answer: "Blocks unauthorized access to a network" },
                        { q: "Which of these is an example of multi-factor authentication?", options: ["Password and fingerprint", "Username and password", "IP address and password", "None of the above"], answer: "Password and fingerprint" },
                        { q: "What is the purpose of a VPN?", options: ["To encrypt internet traffic", "To increase internet speed", "To block advertisements", "To track user behavior"], answer: "To encrypt internet traffic" },
                        { q: "Which of the following is a type of cyber attack?", options: ["Phishing", "Malware", "Ransomware", "All of the above"], answer: "All of the above" },
                        { q: "What does 'two-factor authentication' (2FA) do?", options: ["Requires two passwords", "Requires a password and a phone number", "Requires two forms of identification", "Requires two separate accounts"], answer: "Requires two forms of identification" },
                        { q: "What is a DDoS attack?", options: ["Distributed Denial of Service", "Direct Denial of Service", "Data Disruption of Service", "None of the above"], answer: "Distributed Denial of Service" },
                        { q: "Which of these is used to detect and remove malicious software?", options: ["Antivirus", "Firewall", "Backup software", "VPN"], answer: "Antivirus" },
                        { q: "What is a 'zero-day' exploit?", options: ["An attack that occurs before the software vendor releases a patch", "An attack that occurs when the system is unpatched", "An attack that happens during software installation", "An attack involving outdated software"], answer: "An attack that occurs before the software vendor releases a patch" },
                        { q: "Which of these is an example of social engineering?", options: ["Phishing", "Password cracking", "SQL injection", "DDoS"], answer: "Phishing" }
                    ]  
               
};

const quizForm = document.getElementById('quiz-form');
const subject = sessionStorage.getItem('subject');
document.getElementById('exam-title').innerText = `${subject} Test`;

let currentQuestions = questions[subject];
let timer = 600;
let interval;

// Timer countdown
function startTimer() {
    const timerDisplay = document.getElementById('time');
    interval = setInterval(() => {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        if (timer === 0) {
            clearInterval(interval);
            submitQuiz();
        }
        timer--;
    }, 1000);
}

// Fisher-Yates shuffle
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Load and render questions
function loadQuestions() {
    shuffleArray(currentQuestions); // Shuffle before rendering
    currentQuestions.forEach((item, idx) => {
        const div = document.createElement('div');
        div.className = 'question';
        div.innerHTML = `<p>${idx + 1}. ${item.q}</p>` +
            item.options.map(opt =>
                `<label><input type="radio" name="q${idx}" value="${opt}"> ${opt}</label>`
            ).join('<br>');
        quizForm.appendChild(div);
    });
}

// Submit quiz and calculate score
function submitQuiz() {
    clearInterval(interval);

    let score = 0;
    currentQuestions.forEach((item, idx) => {
        const selected = document.querySelector(`input[name=q${idx}]:checked`);
        if (selected && selected.value === item.answer) {
            score++;
        }
    });

    document.getElementById('quiz-form').style.display = 'none';
    document.querySelector('button').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('score').textContent = `You scored ${score} out of ${currentQuestions.length}`;

    // ✅ Send result to server
    sendResultToServer(score);
}

// Send result to backend (function from HTML)
function sendResultToServer(score) {
    const userData = {
        username: localStorage.getItem('username') || 'demoUser',
        password: localStorage.getItem('password') || 'demoPass',
        course: localStorage.getItem('course') || 'BCA',
        year: localStorage.getItem('year') || '3',
        subject: localStorage.getItem('subject') || 'Networking',
        result: `${score}/${currentQuestions.length}`
    };

    console.log("Sending result to server:", userData);

    fetch("https://yourdomain.com/save_result.php", { // ❗ Replace with actual URL
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(data => {
        console.log("Server response:", data);
        // alert(data.message); // Optional: show server response
    })
    .catch(err => {
        console.error("Error saving result:", err);
    });
}

// Re-attempt button
document.getElementById('reatapt-btn').addEventListener('click', function () {
    alert('Re-attempting the exam...');
    window.location.reload(); // Reset quiz
});

// Logout button
document.getElementById('logout-btn').addEventListener('click', function () {
    alert('Logging out...');
    window.location.href = 'index.html';
});

// Select Subject button
document.getElementById('select-subject-btn').addEventListener('click', function () {
    alert('Redirecting to Select Subject page...');
    window.location.href = 'subject_selection.html';
});

// Init quiz
loadQuestions();
startTimer();





// Data Science - Beginner Level Quiz (120 Questions)
window.quizQuestions = [
    {
        type: 'mcq',
        question: 'What is Data Science xyz?',
        options: ['A type of computer science', 'An interdisciplinary field that uses scientific methods to extract knowledge from data', 'A software development methodology', 'A database management system'],
        answer: 1,
        explanation: 'Data Science is an interdisciplinary field that combines domain expertise, programming skills, and knowledge of mathematics and statistics to extract meaningful insights from data.',
        tips: 'Data Science combines statistics, computer science, and domain knowledge to solve real-world problems.'
    },
    {
        type: 'mcq',
        question: 'Which of the following is NOT a typical step in the data science process?',
        options: ['Data Collection', 'Data Cleaning', 'Data Analysis', 'Software Installation'],
        answer: 3,
        explanation: 'The typical data science process includes data collection, cleaning, exploration, analysis, modeling, and communication. Software installation is a technical setup step, not part of the core process.',
        tips: 'Remember the data science lifecycle: Ask, Get, Explore, Model, and Communicate.'
    },
    {
        type: 'scq',
        question: 'Python is the most popular programming language for data science.',
        options: ['True', 'False'],
        answer: 0,
        explanation: 'Python is indeed the most popular programming language for data science due to its simplicity, extensive libraries (pandas, numpy, scikit-learn), and strong community support.',
        tips: 'Python and R are the two most popular languages for data science, with Python having a slight edge due to its versatility.'
    },
    {
        type: 'mcq',
        question: 'What does SQL stand for?',
        options: ['Structured Query Language', 'Simple Query Language', 'Sequential Query Language', 'Standard Query Language'],
        answer: 0,
        explanation: 'SQL stands for Structured Query Language. It is a programming language designed for managing and manipulating relational databases.',
        tips: 'SQL is essential for data scientists as most data is stored in relational databases.'
    },
    {
        type: 'mcq',
        question: 'Which Python library is primarily used for data manipulation and analysis?',
        options: ['matplotlib', 'pandas', 'numpy', 'seaborn'],
        answer: 1,
        explanation: 'Pandas is the primary Python library for data manipulation and analysis. It provides data structures like DataFrames and tools for reading, writing, and transforming data.',
        tips: 'Think of pandas as Excel for Python - it makes working with structured data easy and efficient.'
    },
    {
        type: 'scq',
        question: 'Big Data refers to datasets that are too large to be processed on a single computer.',
        options: ['True', 'False'],
        answer: 0,
        explanation: 'Big Data refers to datasets that are so large or complex that traditional data processing applications are inadequate to deal with them effectively.',
        tips: 'Big Data is characterized by the 3 Vs: Volume, Velocity, and Variety.'
    },
    {
        type: 'mcq',
        question: 'What is the difference between structured and unstructured data?',
        options: ['Structured data is organized in a predefined format, unstructured data is not', 'Structured data is larger than unstructured data', 'Structured data is more recent than unstructured data', 'There is no difference'],
        answer: 0,
        explanation: 'Structured data is organized in a predefined format (like tables), while unstructured data lacks a predefined format (like text, images, or videos).',
        tips: 'Think of structured data as spreadsheet data and unstructured data as social media posts or images.'
    },
    {
        type: 'mcq',
        question: 'Which of the following is an example of structured data?',
        options: ['Social media posts', 'Customer database with names and addresses', 'YouTube videos', 'Email messages'],
        answer: 1,
        explanation: 'A customer database with names and addresses is structured data because it follows a predefined format with specific fields and data types.',
        tips: 'Structured data typically fits neatly into rows and columns, like a spreadsheet or database table.'
    },
    {
        type: 'mcq',
        question: 'What is a DataFrame in pandas?',
        options: ['A type of machine learning model', 'A 2-dimensional data structure with labeled axes', 'A visualization tool', 'A statistical test'],
        answer: 1,
        explanation: 'A DataFrame is a 2-dimensional data structure in pandas with labeled axes (rows and columns), similar to a spreadsheet or SQL table.',
        tips: 'DataFrames are the most commonly used pandas object for storing and manipulating tabular data.'
    },
    {
        type: 'scq',
        question: 'Data cleaning is typically the most time-consuming part of a data science project.',
        options: ['True', 'False'],
        answer: 0,
        explanation: 'Data cleaning and preparation typically consume 70-80% of a data scientist\'s time, as real-world data is often messy, incomplete, or inconsistent.',
        tips: 'The saying "garbage in, garbage out" emphasizes why data cleaning is so crucial and time-consuming.'
    },
    {
        type: 'mcq',
        question: 'What is a CSV file?',
        options: ['A type of image file', 'A compressed file format', 'A file format for storing tabular data with comma-separated values', 'A programming language'],
        answer: 2,
        explanation: 'CSV stands for Comma-Separated Values. It\'s a simple file format used to store tabular data where each line represents a row and values are separated by commas.',
        tips: 'CSV files are one of the most common formats for exchanging tabular data between systems.'
    },
    {
        type: 'mcq',
        question: 'Which statistical measure represents the middle value in a dataset?',
        options: ['Mean', 'Mode', 'Median', 'Standard deviation'],
        answer: 2,
        explanation: 'The median is the middle value in a dataset when the values are arranged in ascending or descending order.',
        tips: 'Remember: Mean = average, Median = middle, Mode = most frequent.'
    },
    {
        type: 'mcq',
        question: 'What does EDA stand for in data science?',
        options: ['Electronic Data Analysis', 'Exploratory Data Analysis', 'Experimental Data Architecture', 'Extended Data Applications'],
        answer: 1,
        explanation: 'EDA stands for Exploratory Data Analysis, which involves analyzing and investigating data sets to summarize their main characteristics, often using visual methods.',
        tips: 'EDA is like detective work - you explore the data to understand its patterns, anomalies, and structure.'
    },
    {
        type: 'scq',
        question: 'Correlation implies causation.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Correlation does NOT imply causation. Just because two variables are correlated doesn\'t mean one causes the other. There could be other factors involved or the relationship could be coincidental.',
        tips: 'Remember: correlation shows relationship, causation shows that one thing directly causes another.'
    },
    {
        type: 'mcq',
        question: 'Which visualization is best for showing the distribution of a single numerical variable?',
        options: ['Scatter plot', 'Bar chart', 'Histogram', 'Line plot'],
        answer: 2,
        explanation: 'A histogram is the best visualization for showing the distribution of a single numerical variable as it displays the frequency of values within specific ranges.',
        tips: 'Histograms show the shape of the data distribution - normal, skewed, bimodal, etc.'
    },
    {
        type: 'mcq',
        question: 'What is the purpose of data normalization?',
        options: ['To remove duplicate data', 'To scale features to a similar range', 'To convert data types', 'To sort the data'],
        answer: 1,
        explanation: 'Data normalization scales features to a similar range, typically between 0 and 1, so that no single feature dominates others due to its scale.',
        tips: 'Normalization prevents features with larger scales from overwhelming smaller-scale features in algorithms.'
    },
    {
        type: 'mcq',
        question: 'Which Python library is commonly used for data visualization?',
        options: ['pandas', 'numpy', 'matplotlib', 'requests'],
        answer: 2,
        explanation: 'Matplotlib is the most fundamental Python library for creating static, animated, and interactive visualizations.',
        tips: 'Matplotlib is the foundation for many other visualization libraries like seaborn and plotly.'
    },
    {
        type: 'scq',
        question: 'Missing values in a dataset should always be removed.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Missing values should not always be removed. Depending on the situation, they can be imputed (filled) with mean, median, mode, or more sophisticated methods, or the feature might be engineered differently.',
        tips: 'Removing missing values can lead to loss of valuable information. Consider imputation strategies first.'
    },
    {
        type: 'mcq',
        question: 'What is the main difference between supervised and unsupervised learning?',
        options: ['Supervised learning uses more data', 'Supervised learning has labeled target variables, unsupervised learning does not', 'Supervised learning is faster', 'Supervised learning uses Python, unsupervised uses R'],
        answer: 1,
        explanation: 'Supervised learning uses labeled data (input-output pairs) to train models, while unsupervised learning finds patterns in data without labeled outcomes.',
        tips: 'Think of supervised as learning with a teacher (labels), unsupervised as discovering patterns on your own.'
    },
    {
        type: 'mcq',
        question: 'Which of the following is an example of categorical data?',
        options: ['Temperature in Celsius', 'Height in centimeters', 'Colors (Red, Blue, Green)', 'Age in years'],
        answer: 2,
        explanation: 'Colors represent categorical data because they are discrete categories without a natural numerical order or meaningful arithmetic operations.',
        tips: 'Categorical data represents groups or categories, while numerical data represents measurable quantities.'
    },
    {
        type: 'mcq',
        question: 'What is overfitting in machine learning?',
        options: ['Using too much data', 'When a model performs well on training data but poorly on new data', 'When a model is too simple', 'When the dataset is too large'],
        answer: 1,
        explanation: 'Overfitting occurs when a model learns the training data too well, including its noise and outliers, making it perform poorly on new, unseen data.',
        tips: 'Overfitting is like memorizing answers for a test instead of understanding the concepts.'
    },
    {
        type: 'scq',
        question: 'A p-value of 0.05 means there is a 5% chance that the null hypothesis is true.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'A p-value of 0.05 means there is a 5% chance of observing the data (or something more extreme) assuming the null hypothesis is true, not that there\'s a 5% chance the null hypothesis is true.',
        tips: 'P-values tell us about the probability of the data given the hypothesis, not the probability of the hypothesis given the data.'
    },
    {
        type: 'mcq',
        question: 'Which measure of central tendency is most affected by outliers?',
        options: ['Mean', 'Median', 'Mode', 'All are equally affected'],
        answer: 0,
        explanation: 'The mean is most affected by outliers because it takes into account all values in the dataset, while the median only considers the middle value(s).',
        tips: 'For skewed distributions with outliers, median is often a better measure of central tendency than mean.'
    },
    {
        type: 'mcq',
        question: 'What is the purpose of cross-validation?',
        options: ['To increase the size of the dataset', 'To evaluate model performance and reduce overfitting', 'To clean the data', 'To visualize the data'],
        answer: 1,
        explanation: 'Cross-validation is used to evaluate how well a model will generalize to new data by training and testing on different subsets of the available data.',
        tips: 'Cross-validation helps ensure your model will work well on new, unseen data, not just the training data.'
    },
    {
        type: 'mcq',
        question: 'Which file format is most commonly used for storing large datasets?',
        options: ['TXT', 'CSV', 'JSON', 'Parquet'],
        answer: 3,
        explanation: 'Parquet is a columnar storage format that is highly efficient for large datasets, offering better compression and faster query performance than CSV or JSON.',
        tips: 'While CSV is common for smaller datasets, Parquet is preferred for big data due to its efficiency.'
    },
    {
        type: 'scq',
        question: 'Feature engineering is the process of selecting and transforming variables for machine learning models.',
        options: ['True', 'False'],
        answer: 0,
        explanation: 'Feature engineering involves selecting, transforming, and creating new features from raw data to improve machine learning model performance.',
        tips: 'Good features can make a simple algorithm perform better than a complex algorithm with poor features.'
    },
    {
        type: 'mcq',
        question: 'What is a scatter plot used for?',
        options: ['Showing categorical data distribution', 'Showing the relationship between two numerical variables', 'Showing time series data', 'Showing text data'],
        answer: 1,
        explanation: 'A scatter plot displays the relationship between two numerical variables by plotting data points on a two-dimensional graph.',
        tips: 'Scatter plots help identify correlations, clusters, and outliers in the relationship between two variables.'
    },
    {
        type: 'mcq',
        question: 'Which of the following is NOT a type of machine learning?',
        options: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'Supervised Unsupervised Learning'],
        answer: 3,
        explanation: 'Supervised Unsupervised Learning is not a real type of machine learning. The three main types are Supervised, Unsupervised, and Reinforcement Learning.',
        tips: 'The three main ML paradigms each have different approaches to learning from data.'
    },
    {
        type: 'mcq',
        question: 'What does API stand for?',
        options: ['Application Programming Interface', 'Automated Programming Interface', 'Advanced Programming Interface', 'Application Program Integration'],
        answer: 0,
        explanation: 'API stands for Application Programming Interface. It\'s a set of protocols and tools that allows different software applications to communicate with each other.',
        tips: 'APIs are crucial for data scientists to access data from web services and integrate different tools.'
    },
    {
        type: 'scq',
        question: 'Standard deviation measures how spread out data points are from the mean.',
        options: ['True', 'False'],
        answer: 0,
        explanation: 'Standard deviation measures the amount of variation or dispersion of data points from the mean. A low standard deviation means data points are close to the mean.',
        tips: 'Standard deviation helps understand if data points are clustered around the mean or spread out widely.'
    },
    {
        type: 'mcq',
        question: 'Which of the following is a NoSQL database?',
        options: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'],
        answer: 2,
        explanation: 'MongoDB is a NoSQL database that stores data in flexible, JSON-like documents rather than traditional table structures.',
        tips: 'NoSQL databases are often used for big data and real-time applications due to their flexibility and scalability.'
    },
    {
        type: 'mcq',
        question: 'What is the purpose of a box plot?',
        options: ['To show correlations between variables', 'To display the five-number summary of a dataset', 'To show categorical data', 'To display time series data'],
        answer: 1,
        explanation: 'A box plot displays the five-number summary of a dataset: minimum, first quartile, median, third quartile, and maximum, along with outliers.',
        tips: 'Box plots are great for comparing distributions and identifying outliers across different groups.'
    },
    {
        type: 'mcq',
        question: 'Which Python library is best for numerical computations?',
        options: ['pandas', 'matplotlib', 'numpy', 'seaborn'],
        answer: 2,
        explanation: 'NumPy (Numerical Python) is the fundamental library for numerical computations in Python, providing support for arrays and mathematical functions.',
        tips: 'NumPy forms the foundation for most other data science libraries in Python.'
    },
    {
        type: 'scq',
        question: 'Data scientists only work with clean, perfect datasets.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Data scientists typically work with messy, incomplete, and imperfect real-world data. A significant part of their job involves cleaning and preparing data.',
        tips: 'Real-world data is messy - that\'s why data cleaning and preprocessing skills are so valuable.'
    },
    {
        type: 'mcq',
        question: 'What is the difference between classification and regression?',
        options: ['Classification predicts categories, regression predicts continuous values', 'Classification is faster than regression', 'Classification uses more data than regression', 'There is no difference'],
        answer: 0,
        explanation: 'Classification predicts discrete categories or classes (e.g., spam/not spam), while regression predicts continuous numerical values (e.g., house prices).',
        tips: 'Think: Classification = categories, Regression = continuous numbers.'
    },
    {
        type: 'mcq',
        question: 'Which measure tells us about the linear relationship between two variables?',
        options: ['Mean', 'Standard deviation', 'Correlation coefficient', 'Variance'],
        answer: 2,
        explanation: 'The correlation coefficient measures the strength and direction of the linear relationship between two variables, ranging from -1 to +1.',
        tips: 'Correlation ranges from -1 (perfect negative) to +1 (perfect positive), with 0 meaning no linear relationship.'
    },
    {
        type: 'mcq',
        question: 'What is web scraping?',
        options: ['Cleaning data from websites', 'Extracting data from websites', 'Creating websites', 'Securing websites'],
        answer: 1,
        explanation: 'Web scraping is the process of extracting data from websites by parsing HTML content and retrieving specific information.',
        tips: 'Web scraping allows data scientists to collect data from websites that don\'t provide APIs.'
    },
    {
        type: 'scq',
        question: 'JSON is a lightweight data interchange format.',
        options: ['True', 'False'],
        answer: 0,
        explanation: 'JSON (JavaScript Object Notation) is indeed a lightweight, text-based data interchange format that is easy for humans to read and write.',
        tips: 'JSON is commonly used for web APIs and configuration files due to its simplicity and readability.'
    },
    {
        type: 'mcq',
        question: 'Which of the following is a measure of variability?',
        options: ['Mean', 'Median', 'Mode', 'Range'],
        answer: 3,
        explanation: 'Range (difference between maximum and minimum values) is a measure of variability, while mean, median, and mode are measures of central tendency.',
        tips: 'Measures of variability include range, variance, standard deviation, and interquartile range.'
    },
    {
        type: 'mcq',
        question: 'What is the primary purpose of data visualization?',
        options: ['To make data look pretty', 'To communicate insights and patterns in data', 'To store data efficiently', 'To clean data'],
        answer: 1,
        explanation: 'The primary purpose of data visualization is to communicate insights, patterns, and relationships in data in a clear and understandable way.',
        tips: 'Good visualizations make complex data easy to understand and reveal insights that might be hidden in raw numbers.'
    },
    {
        type: 'mcq',
        question: 'Which type of chart is best for showing parts of a whole?',
        options: ['Line chart', 'Scatter plot', 'Pie chart', 'Histogram'],
        answer: 2,
        explanation: 'A pie chart is best for showing parts of a whole, where each slice represents a proportion of the total.',
        tips: 'Use pie charts when you want to show how different categories contribute to a total, but limit to 5-7 categories.'
    },
    {
        type: 'scq',
        question: 'Machine learning algorithms can automatically discover insights without any human guidance.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'While ML algorithms can find patterns in data, they require human guidance for problem definition, data preparation, algorithm selection, and interpretation of results.',
        tips: 'AI and ML are tools that augment human intelligence, not replace human judgment and expertise.'
    },
    {
        type: 'mcq',
        question: 'What is a hypothesis in statistics?',
        options: ['A type of data visualization', 'A proposed explanation that can be tested', 'A statistical software', 'A data cleaning technique'],
        answer: 1,
        explanation: 'A hypothesis is a proposed explanation or statement that can be tested using statistical methods to determine if it\'s supported by evidence.',
        tips: 'Hypotheses are typically stated as null hypothesis (no effect) and alternative hypothesis (there is an effect).'
    },
    {
        type: 'mcq',
        question: 'Which of the following is an example of time series data?',
        options: ['Customer survey responses', 'Daily stock prices over a year', 'Employee salary data', 'Product categories'],
        answer: 1,
        explanation: 'Daily stock prices over a year represent time series data because they are observations collected sequentially over time.',
        tips: 'Time series data has a natural time ordering and often shows trends, seasonality, or cycles.'
    },
    {
        type: 'mcq',
        question: 'What does ETL stand for in data processing?',
        options: ['Extract, Transform, Load', 'Evaluate, Test, Learn', 'Estimate, Trial, Logic', 'Export, Transfer, Link'],
        answer: 0,
        explanation: 'ETL stands for Extract, Transform, Load - a process used to extract data from sources, transform it into a suitable format, and load it into a destination system.',
        tips: 'ETL is a fundamental process in data engineering and data warehousing.'
    },
    {
        type: 'scq',
        question: 'Outliers should always be removed from datasets.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Outliers should not always be removed. They might represent important information, measurement errors, or rare but valid events. The decision depends on the context and domain knowledge.',
        tips: 'Always investigate outliers before deciding whether to keep, transform, or remove them.'
    },
    {
        type: 'mcq',
        question: 'Which statistical test is used to compare means of two groups?',
        options: ['Chi-square test', 'T-test', 'ANOVA', 'Correlation test'],
        answer: 1,
        explanation: 'A t-test is used to compare the means of two groups to determine if they are statistically significantly different from each other.',
        tips: 'Use t-test for two groups, ANOVA for three or more groups.'
    },
    {
        type: 'mcq',
        question: 'What is the purpose of feature scaling?',
        options: ['To remove features', 'To add new features', 'To bring all features to a similar scale', 'To visualize features'],
        answer: 2,
        explanation: 'Feature scaling brings all features to a similar scale, preventing features with larger ranges from dominating the analysis or model training.',
        tips: 'Common scaling techniques include normalization (0-1) and standardization (mean=0, std=1).'
    },
    {
        type: 'mcq',
        question: 'Which Python library is commonly used for machine learning?',
        options: ['requests', 'beautifulsoup', 'scikit-learn', 'flask'],
        answer: 2,
        explanation: 'Scikit-learn is the most popular Python library for machine learning, providing simple and efficient tools for data mining and analysis.',
        tips: 'Scikit-learn has a consistent API and excellent documentation, making it great for beginners.'
    },
    {
        type: 'scq',
        question: 'Data science projects always follow a linear, sequential process.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Data science projects are typically iterative and cyclical, not linear. You often need to go back and forth between different stages as you learn more about the data and problem.',
        tips: 'Data science is an iterative process - expect to cycle through steps multiple times.'
    },
    {
        type: 'mcq',
        question: 'What is a confidence interval?',
        options: ['A measure of how confident you feel', 'A range of values that likely contains the true parameter', 'A type of visualization', 'A data cleaning technique'],
        answer: 1,
        explanation: 'A confidence interval is a range of values that is likely to contain the true value of a population parameter with a specified level of confidence.',
        tips: 'A 95% confidence interval means that if we repeated the study many times, 95% of the intervals would contain the true parameter.'
    },
    {
        type: 'mcq',
        question: 'Which of the following is NOT a common data quality issue?',
        options: ['Missing values', 'Duplicate records', 'Inconsistent formats', 'Too much data'],
        answer: 3,
        explanation: 'Too much data is generally not considered a data quality issue, though it can be a computational challenge. Common quality issues include missing values, duplicates, and inconsistencies.',
        tips: 'Data quality issues require cleaning and preprocessing before analysis can begin.'
    },
    {
        type: 'mcq',
        question: 'What is the main advantage of using R for data science?',
        options: ['It\'s faster than Python', 'It has excellent statistical packages and visualization capabilities', 'It uses less memory', 'It\'s easier to learn'],
        answer: 1,
        explanation: 'R was specifically designed for statistical computing and has excellent built-in statistical packages and advanced visualization capabilities.',
        tips: 'R excels in statistics and visualization, while Python is more general-purpose and has broader applications.'
    },
    {
        type: 'scq',
        question: 'Big Data is only about the volume of data.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Big Data is characterized by the 3 Vs: Volume (amount), Velocity (speed of generation), and Variety (different types). Some add more Vs like Veracity and Value.',
        tips: 'Volume is just one aspect - velocity and variety are equally important in defining Big Data.'
    },
    {
        type: 'mcq',
        question: 'Which of the following is an example of supervised learning?',
        options: ['Customer segmentation', 'Predicting house prices', 'Finding hidden patterns in data', 'Data compression'],
        answer: 1,
        explanation: 'Predicting house prices is supervised learning because you have historical data with known prices (labels) to train the model.',
        tips: 'Supervised learning requires historical examples with known outcomes to learn from.'
    },
    {
        type: 'mcq',
        question: 'What is the purpose of A/B testing?',
        options: ['To clean data', 'To compare two versions to see which performs better', 'To visualize data', 'To store data'],
        answer: 1,
        explanation: 'A/B testing compares two versions (A and B) of something to determine which one performs better based on a specific metric.',
        tips: 'A/B testing is commonly used in web development, marketing, and product development to make data-driven decisions.'
    },
    {
        type: 'mcq',
        question: 'Which measure is most appropriate for highly skewed data?',
        options: ['Mean', 'Median', 'Mode', 'Standard deviation'],
        answer: 1,
        explanation: 'The median is most appropriate for highly skewed data because it\'s not affected by extreme values, unlike the mean.',
        tips: 'For skewed distributions, median gives a better sense of the "typical" value than the mean.'
    },
    {
        type: 'scq',
        question: 'Correlation coefficient can be greater than 1.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Correlation coefficient (Pearson\'s r) always ranges from -1 to +1. Values outside this range indicate a calculation error.',
        tips: 'Remember: correlation is always between -1 and +1, with 0 meaning no linear relationship.'
    },
    {
        type: 'mcq',
        question: 'What is data mining?',
        options: ['Extracting data from databases', 'The process of discovering patterns in large datasets', 'Storing data in warehouses', 'Cleaning dirty data'],
        answer: 1,
        explanation: 'Data mining is the process of discovering patterns, relationships, and insights in large datasets using statistical and machine learning techniques.',
        tips: 'Data mining combines statistics, machine learning, and database systems to extract knowledge from data.'
    },
    {
        type: 'mcq',
        question: 'Which visualization would be best for showing the trend of a variable over time?',
        options: ['Bar chart', 'Pie chart', 'Line chart', 'Scatter plot'],
        answer: 2,
        explanation: 'A line chart is best for showing trends of a variable over time because it clearly displays how values change across time periods.',
        tips: 'Line charts excel at showing temporal patterns, trends, and changes over time.'
    },
    {
        type: 'mcq',
        question: 'What is the difference between wide and long data formats?',
        options: ['Wide data has more rows, long data has more columns', 'Wide data has more columns, long data has more rows', 'There is no difference', 'Wide data is better than long data'],
        answer: 1,
        explanation: 'Wide data has more columns with each variable in a separate column, while long data has more rows with variables stacked into a single column.',
        tips: 'Wide format is good for human reading, long format is often better for analysis and visualization.'
    },
    {
        type: 'scq',
        question: 'Python dictionaries are ordered data structures.',
        options: ['True', 'False'],
        answer: 0,
        explanation: 'As of Python 3.7+, dictionaries maintain insertion order. Before Python 3.7, dictionaries were unordered.',
        tips: 'This is a relatively recent change in Python that improved predictability of dictionary behavior.'
    },
    {
        type: 'mcq',
        question: 'What is the primary purpose of data preprocessing?',
        options: ['To visualize data', 'To prepare raw data for analysis', 'To store data', 'To present results'],
        answer: 1,
        explanation: 'Data preprocessing prepares raw data for analysis by cleaning, transforming, and formatting it into a suitable structure for algorithms.',
        tips: 'Good preprocessing is crucial for successful data science projects - "garbage in, garbage out."'
    },
    {
        type: 'mcq',
        question: 'Which of the following is a measure of central tendency?',
        options: ['Standard deviation', 'Range', 'Mean', 'Variance'],
        answer: 2,
        explanation: 'Mean is a measure of central tendency (along with median and mode), while the others are measures of variability or spread.',
        tips: 'Central tendency = center of the data; Variability = spread of the data.'
    },
    {
        type: 'mcq',
        question: 'What does it mean when we say data is "normalized"?',
        options: ['Data follows a normal distribution', 'Data is scaled to a common range', 'Data has no missing values', 'Data is sorted'],
        answer: 1,
        explanation: 'Normalized data is scaled to a common range, typically 0 to 1, to ensure all features contribute equally to analysis.',
        tips: 'Don\'t confuse "normalized" (scaled) with "normal distribution" - they\'re different concepts.'
    },
    {
        type: 'scq',
        question: 'Excel can be considered a data science tool.',
        options: ['True', 'False'],
        answer: 0,
        explanation: 'Excel can be used for basic data science tasks like data cleaning, analysis, and visualization, though it has limitations for large datasets and advanced techniques.',
        tips: 'Excel is often a starting point for data analysis, but most data scientists eventually move to more powerful tools.'
    },
    {
        type: 'mcq',
        question: 'What is the main purpose of version control in data science?',
        options: ['To control data versions', 'To track changes in code and collaborate', 'To control software versions', 'To manage datasets'],
        answer: 1,
        explanation: 'Version control (like Git) tracks changes in code, enables collaboration, and allows you to revert to previous versions when needed.',
        tips: 'Version control is essential for reproducible data science and team collaboration.'
    },
    {
        type: 'mcq',
        question: 'Which of the following is NOT a type of bias in data?',
        options: ['Selection bias', 'Confirmation bias', 'Sampling bias', 'Calculation bias'],
        answer: 3,
        explanation: 'Calculation bias is not a recognized type of bias. Common biases include selection bias, confirmation bias, sampling bias, and survivor bias.',
        tips: 'Understanding different types of bias helps data scientists design better studies and interpret results correctly.'
    },
    {
        type: 'mcq',
        question: 'What is the purpose of data validation?',
        options: ['To visualize data', 'To ensure data meets quality standards and business rules', 'To transform data', 'To store data'],
        answer: 1,
        explanation: 'Data validation ensures that data meets predefined quality standards, business rules, and constraints before it\'s used for analysis.',
        tips: 'Data validation catches errors early and prevents poor-quality data from affecting downstream analysis.'
    },
    {
        type: 'scq',
        question: 'Statistical significance always means practical significance.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Statistical significance (p < 0.05) doesn\'t necessarily mean practical significance. You need to consider effect size and real-world impact.',
        tips: 'A result can be statistically significant but have such a small effect that it\'s not practically meaningful.'
    },
    {
        type: 'mcq',
        question: 'What is the primary difference between descriptive and inferential statistics?',
        options: ['Descriptive is harder than inferential', 'Descriptive summarizes data, inferential makes predictions about populations', 'Descriptive uses more data', 'There is no difference'],
        answer: 1,
        explanation: 'Descriptive statistics summarize and describe data you have, while inferential statistics use sample data to make predictions or inferences about larger populations.',
        tips: 'Descriptive = describing what you see; Inferential = inferring what you don\'t see from what you do see.'
    },
    {
        type: 'mcq',
        question: 'Which of the following is a common cause of data leakage?',
        options: ['Using future information to predict the past', 'Having too much training data', 'Using cross-validation', 'Having clean data'],
        answer: 0,
        explanation: 'Data leakage often occurs when future information is inadvertently used to predict past events, leading to unrealistically good model performance.',
        tips: 'Data leakage makes models look artificially good during training but fail in real-world deployment.'
    },
    {
        type: 'mcq',
        question: 'What is the purpose of exploratory data analysis (EDA)?',
        options: ['To build final models', 'To understand data characteristics and find patterns', 'To clean the data', 'To present final results'],
        answer: 1,
        explanation: 'EDA helps you understand your data\'s characteristics, distributions, relationships, and patterns before building models or conducting formal analysis.',
        tips: 'EDA is like reconnaissance - you explore the data landscape before deciding on your analysis strategy.'
    },
    {
        type: 'scq',
        question: 'More data always leads to better models.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'More data doesn\'t always lead to better models. Quality matters more than quantity - noisy, biased, or irrelevant data can hurt model performance.',
        tips: 'Focus on data quality, relevance, and representativeness rather than just volume.'
    },
    {
        type: 'mcq',
        question: 'What is the most important skill for a data scientist?',
        options: ['Programming', 'Mathematics', 'Domain knowledge', 'Critical thinking and problem-solving'],
        answer: 3,
        explanation: 'While technical skills are important, critical thinking and problem-solving are most crucial for defining problems, choosing appropriate methods, and interpreting results correctly.',
        tips: 'Technical skills can be learned, but the ability to think critically and solve problems is what makes a great data scientist.'
    },
    {
        type: 'mcq',
        question: 'Which of the following best describes the role of a data scientist?',
        options: ['Only writing code', 'Only doing statistics', 'Only creating visualizations', 'Combining domain expertise, programming, and statistics to solve business problems'],
        answer: 3,
        explanation: 'Data scientists combine domain expertise, programming skills, and statistical knowledge to extract insights from data and solve real-world business problems.',
        tips: 'Data science is inherently interdisciplinary - it requires skills from multiple domains to be effective.'
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = window.quizQuestions;
}
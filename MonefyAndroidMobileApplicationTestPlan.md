# Monefy Test Plan & Test Cases

When it comes to coming up with the Test strategy for an application there are two aspects that have to be considered
1. Functional testing
2. Non Functional testing

Especially, with a mobile application there is another degree of parameter that gets introduced in the form of - which 
mobile devices to be used for testing. This decision can be made post a bit of market analysis. Factors that can be 
considered
1. Most used mobile oses
2. Most used mobile os versions
3. Most common screen resolutions
4. Leading mobile manufactures

Some times maintaining these combinations for the testing purpose might be trickier. This is when third party service providers like Sauce Labs (https://saucelabs.com/), Browser Stack (https://www.browserstack.com/) to name a few can be leveraged. For e.g. in my earlier experience, Sauce Labs was used to get the test coverage across all 4 pointers listed above both as automation and manual testing. 

Also, if a version of mobile application is already in the market then with the application monitoring tools being 
configured, the analytics on what are the agents using the application can be identified. For e.g. one of the applications that I worked on could be accessed from both Desktop and Mobile. In order to get the statistics on what percentage of users are distributed across both on Desktop & Mobile, different os, os versions, browser, browser versions, resolutions; application monitoring tool New Relic (https://newrelic.com/) was configured.

Post identifying the list of devices which need to be tested, there is another aspect that comes in. Testing on real devices 
versus Testing on emulators. Nothing beats testing on real devices. But in case of absence of the real devices, 
emulators can also be used.
___

## Test Strategy

![TestPyramid](https://martinfowler.com/articles/practical-test-pyramid/testPyramid.png)

Testing strategy will be as per the [Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html).
___

**Note** - Test cases below are divided into three priorities - High, Medium, Low
___

## Functional Tests

#### Use case specific

1. Expense & Income
    * `High Priority` Verify that the user is able to add new income / expense for each category.
    * `High Priority` Verify that when the user adds / updates, income / expense the mathematical operations are valid.
    * `High Priority` Verify that when the user adds / updates / deletes, income / expense the balance and the ui charts are updated. 
    * `High Priority` Verify that when the user adds / updates / deletes, income / expense the values of every category is updated.
    * `High Priority` Verify that when the user selects Day / Week / Month / Year, the balance and the ui charts are updated.

2. Accounts
    * `High Priority` Verify that the is able to create a new account and should get a notification for the creation of the account.
    * `High Priority` Verify that the is able to delete an account and should get a notification for the deletion of the account.
    * `High Priority` Verify that once the user deletes the account all the income/expense should be deleted.
    * `High Priority` Verify that the user is able to switch between the accounts. 
    * `High Priority` Verify that when the user switches the account UI & Charts should be updated accordingly.
    * `Medium Priority` Verify the behaviour of the application while creating and deleting multiple accounts and the updation of calculations after each action.
    * `Medium Priority` Verify user is able to edit the first day of the month, first day of the week and the carry over functionality.

3. Pro Features    
    * `High Priority` Verify if the user is able to buy the Pro features using different payment types.
    * `High Priority` Verify if the free user is not be able to use the pro features.
    * `High Priority` Verify if only the pro user is able to use features like Multi-Currency, Synchronization, Passcode protection etc.
    * `High Priority` Verify if both free / pro user are able to edit categories but only pro user is able to add new categories.   

4. Settings 
    * Export to file
        * `High Priority` Verify if the clicking on this option asks for the user permission to access the media, files on the device.
        * `High Priority` Verify if the user is able to select Character set, Decimal separator, Delimiter character.
        * `High Priority` Verify if the user is suggested options to Upload to the exported data. 
    * About Monefy
        * `High Priority` Verify if the user is able to view the information about the application, version.
        * `High Priority` Verify if the user is enable / disable Google Analytics.
    * Privacy Policy
        * `High Priority` Verify if the user is redirected to Monefy Privacy Policy
        * `Medium Priority` Verify if the user is able to minimize the privacy policy browser window and come back to the application.
    * Synchronization
        * `High Priority` Verify if the pro user is able to synchronize the data to both Dropbox / Google Drive.
        * `High Priority` Verify if the pro user is able to view / reuse the exported data and is not corrupted.
        * `High Priority` Verify if the user is asked about the Dropbox / Google Drive credentials when trying to synchronize data for the first time.
    * Data Backup
        * `High Priority` Verify if when the use clicks on 'Create data backup', data back up is created.
        * `High Priority` Verify if when the use clicks on 'Restore data', data back up is restored.
        * `High Priority` Verify if when the use clicks on 'Clear data', data back up is cleared both from Dropbox / Google Drive.

5. Amount Transfers
    * `High Priority` Verify that the user is able to transfer between the accounts.
    * `High Priority` Verify that the user is able to see all the transfers in the transaction list.
    * `High Priority` Verify that the balances and ui charts update after the transfers.    

#### User Interface

* `High Priority` Verify the user interface of the application in different popular resolutions.
* `High Priority` Verify the responsiveness of the application in different devices of different sizes and different resolutions.
* `High Priority` Verify the ease of the usage of the application in case of the responsiveness.
* `High Priority` Verify if the user interface is as per the designs provided in different resolutions to be supported.
* `High Priority` Verify if both the organizational and the international standards of user intreface are met.
* `Medium Priority` Verify if all the icons are clearly visible in differnet resolutions.
* `Medium Priority` Verify if all the details in the application are clearly visible on Landscape and Portrait resolution. 

#### Compatibility

* `High Priority` Verify if the application can be installed / upgraded from Google Play Store (Android) or using apk file.
* `High Priority` Verify if the application can be installed on different Oses.
* `High Priority` Verify if the application works smoothly after OS upgrade.
* `High Priority` Verify if the application can be uninstalled and installed again.
* `High Priority` Verify if the user data is restored as the way it is in case of uninstall and install.
* `High Priority` Verify that the application performs smoothly even when user has not provided any of the permisson.

#### Usability

* `High Priority` Verify if the user is able to swipe the Balance button from bottom to top and vice-versa.
* `High Priority` Verify if the user is able to swipe right to left to save options like Categories, Accounts, Currencies, Settings.
* `High Priority` Verify if the application is able to support different language options. (Localization) 
* `High Priority` Verify if the user is able to view all the elements in the application in Dark or Light theme.
* `Medium Priority` Verify if the user is able to select any of Day / Week / Month / Year or any day from the Calendar.
* `Medium Priority` Verify if the application works fine when other applications are also operational.

## Non-Functional Tests

1. Performance
    * `High Priority` Verify if the application load time is less than 2 seconds.
    * `High Priority` Verify if the user is able to navigate between screens without any lag.
    * `High Priority` Verify if the usage of the application does not over consume the battery at rapid rate.
    * `High Priority` Verify if the usage of the application does not over consume the RAM.
    * `High Priority` Verify if the usage of the application consumes lesser battery when in Battery saver mode. 
    * `Medium Priority` Verify if the usage of the application does not result in a crash.
    * `Medium Priority` Verify if the usage of the application in the background consumes lot of battery.
    * `Medium Priority` Verify the time taken to synchronize with Dropbox / Google Drive at different network speeds. 

2. Security
    * `High Priority` Verify if the user data when stored is encrypted.
    * `High Priority` Verify if the user impersonation is not possible by tampering the session ids.
    * `High Priority` Verify if the application data is only accessible to the application.
    * `High Priority` Verify if the data cannot be synchronized to any server other than Dropbox / Google Drive.

3. Backward Compatibility
    * `High Priority` Verify if the upgrade to the latest version of the application does not break the existing data.
    * `High Priority` Verify if the user is notified to take use the Data Backup before upgrading the application.

4. Recovery
    * `High Priority` Verify if the user is able to restore the data post application crash recovery.
    * `High Priority` Verify if the application exits gracefully when the battery dies.
    * `High Priority` Verify if the user has an option to send the logs of the application crash to the developer.

5. Accessibility
    * `High Priority` Verify if the accessibility standards are met based on location. 
    * `High Priority` Verify if the visually challenged users are able to use the application.
    
6. Feature Toggle
    * `High Priority` Verify if the toggle architecture is in place to disable the feature in case of rollback.

## Automated Tests 
1. Unit tests
2. Integration tests
    * Narrow level integration tests
    * Contract tests
3. End to End tests
    * Api Regression tests / Broader level integration tests
    * Ui Regression tests
    * Smoke tests
    * Cross Os / Browser / Device tests
    * Visual Regression tests
4. Performance tests
    * Load tests
    * Spike tests
    * Endurance tests
    * Page load tests

## Continuous Integration / Continuous Delivery

* Automated test cases should be executed as a part of the Continuous Integration pipeline.
* Unit & Integration tests to be created while the build is created.
* Smoke tests to be executed once the build is deployed on the Development / System Integration test environment.
* Once 100% pass of Smoke tests, the build should be promoted to the QA environment.
* Regression tests to be executed on the smoke tested build deployed on the QA environment.
* Once 100% pass of Regression tests, the build should be promoted to the Pre-Production environment.


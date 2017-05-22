*   *                                
*   *                                
*   *                                
*   *   ****   * **   ****    ****   
*   *  *    *   *    *    *  *    *  
*   *  *        *    *    *  *    *  
*   *  *        *    *    *  *    *  
*   *  *    *   *    *    *  *    *  
 ***    ****    *     ****    ****

Welcome to the front end development practical for Ucroo

Please complete the following tasks:


1) Add a configuration service that provides access to the version, application name, company name, and copyright date 
2) Redo the navbar component so that it displays the application name sourced from the config service
3) Convert the navbar so that it gets a list of buttons each with a defined action sourced from a service (you'll need to create a uiService) 
and write code to make each button console.log the action when clicked
    - The list of buttons has the following format
    [{
        label : "Home",
        action : "navigate:home"
    },
    {
        label : "Contact",
        action : "show:contactForm",
    },
    {
        label : "About",
        action "show:aboutDialog"
    }]
    
3) Add a footer that displays the company name and copyright data "Copyright YEAR - NAME"

4) Add a dialog that displays the information about the app 

5) Add ng-aria to the core application to make the application accessible (add appropriate aria tags to each component)

6) In gulpfile.js add a task that prints out the details from the package.json in color (you may need to add a package)

7) Optional - Restyle the application. Any UI tweaks/theme adjustments etc you want to make to show us your CSS chops

8) Optional - Add a gulp task that's commonly used but not currently in the gulpfile
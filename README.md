# Daily--Work-Day-Scheduler


## Goal 
  To take the given starter code and use the jQuery API to build an interactive site for
  
 ## User Story
  The given User Story is as follows:
    
    AS AN employee with a busy schedule
    I WANT to add important events to a daily planner
    SO THAT I can manage my time effectively    
    
  ## Acceptance Criteria
    GIVEN I am using a daily planner to create a schedule
        WHEN I open the planner
        THEN the current day is displayed at the top of the calendar
        WHEN I scroll down
        THEN I am presented with time blocks for standard business hours
        WHEN I view the time blocks for that day
        THEN each time block is color-coded to indicate whether it is in the past, present, or future
        WHEN I click into a time block
        THEN I can enter an event
        WHEN I click the save button for that time block
        THEN the text for that event is saved in local storage
        WHEN I refresh the page
        THEN the saved events persist
        
 ## Assets
 
 The Following image demonstrates the landing page's desired layout:
 
![The Landing Page Demo and Style Guide](./assets/images/Demo-landing-page.png)

## Purpose of the Project 

The purpose behind this porject/module is to test my ability in refactory work. Giving me an oppurtunity to felx my abiltiy in adding and creating semantic HTML elements. As well as using 'alt' tags to create a website that has good SEO and follows the Accessiblity Standards for those that use screen readers. This project also gives me that chance to see what working in the industry is like as a web developer. 

## Challenges

 This project tested something new too me as a developer, Refactoring code. I found that it was harder than I thought when I first started working on this assignment. As I was use to using 'DIV' and 'Class Elements' to add styling to my webpage prior to starting this course. I felt it was a good barrier to work through as I can now see that using Semantic Elements can make ones codebase apper easier to read and write going foward. I found that the best way to refactor the codebase was to use a split pane in my VSCODE and Collapse all the sections in the HTML index and CSS stylesheet. Then only un-collapsing the section I was work on in both documents to clearly see what I was working on at any given time. 
 
The following image shows the Collapsing technique I used :

![Screenshot of VScode with split panes. Both the HTML and CSS are collapsed at specific sections](./assets/images/Screenshot-panel1.png)

## Learning Moment

One of the Acceptance Criteria of the project was to use 'alt' tags in the HTML document in-order to create a SEO website and to adhere Accessiblity Standards. Well working on refactroring the HTML file, I noticed the 'div' with a class of 'Hero'. When I checked the CSS I saw background-img was being applied to the 'div'. Not knowing what exactly to do, I look into possible solitions to the problem and found out about the 'Aria-label' attribute to be a solution to my issue. 

Setting up the element as: 
<div class="hero" aria-label=""></div> 

Allows screen readers to treat the attribute as a stand in 'alt' attribute. 

## Testing the solution

To make sure this worked, I turned on the screen reader on macOS - Voice Over. To do this, I simply went to settings and typed in Voice Over in the search bar. 

![macOS settings menu](./assets/images/Screenshot-settings.png)

After that, I opend the webpage and listent for my 'Aria-label' to be read allowed. 

## Take Aways 

This was a well designed project to work on sematic elements and SEO. I learend that there is a lot more to refeactor work than I had orginal thought. This Was a great learning tool for me to start seeing what the day to day work life of a web developer could look like. Getting a hands on approach to the industry is a huge step in my ability as a developer.

## Links
This links to the live page: 
https://mmount98.github.io/Horiseon-Refactory/

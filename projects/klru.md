---
title: KLRU-TV, Austin PBS
pid: klru
launch: June 2018
date: 2018-06-01
purl: www.klru.org
tech: project management, prototyping, UI/UX, HTML, CSS/SCSS, JavaScript, Node, Express, Handlebars, Contentful
shots:
 - img: klru-home.jpg
   alt: Home
 - img: klru-schedule.jpg
   alt: Schedule
 - img: klru-donate.jpg
   alt: Donate
 - img: klru-landing.jpg
   alt: Who We Are
 - img: klru-moving-forward.jpg
   alt: Moving Forward
mobiles:      
 - img: klru-home-mobile.jpg
   alt: Home (mobile)
 - img: klru-menu-mobile.jpg
   alt: Nav Menu (mobile)
 - img: klru-schedule-mobile.jpg
   alt: Schedule (mobile)
 - img: klru-donate-mobile.jpg
   alt: Donate (mobile)
 - img: klru-landing-mobile.jpg
   alt: Who We Are (mobile)      
---
The main website for KLRU-TV, Austin PBS, is where the station communicates information about upcoming community events and tapings, manages a growing online donation and membership program, and provides schedule details including detailed show and episode information for each of its four TV channels. The website is a critical point of communication for KLRU but the web team and the site editors were saddled with an increasing amount of technical debt in managing a six year-old site. The need to use multiple workarounds and fix frequent bugs on the pages meant that the site’s managers couldn’t schedule time to make substantive changes and that the site’s visitors struggled to find the information they were looking for.

The site was old and out of date — it used an outdated version of WordPress which I was always hesitant to update because I was concerned that an update would break the large amount of custom PHP that provided the connection between the proprietary schedule software and the online channel schedule. After meeting with all the departments that worked with the website we identified three pain points to focus on for the redesign: security improvements, fixing the outdated codebase, and automating processes for other departments at the station.

I decided that the redesigned site should be as flexible as possible and that we should choose forward-looking technologies even if they weren’t currently as stable and full-featured. I wanted the new site to be a framework for future development. First, we decided to switch from WordPress to Contentful for content management. We felt Contentful was a more flexible option as it allowed us to develop our own content models and has a well-documented API. And moving from WordPress eliminated most of our security concerns.

Instead of continuing to use the bespoke custom code to access the proprietary TV schedule software, we decided to use the PBS Schedule API as the data source for the new site schedule. The decision to use the PBS API was difficult because the Schedule API had a number of known bugs and was reported to be not as accurate as the old system. Fortunately, over the next six months PBS followed a development path that made the API much more accurate overall and made maintaining the schedule much easier for us.

Finally, we decided from the start to use the ideas of the MRO (Maintenance, Review, and Overhaul) framework. The framework works as a guideline for the web team to be open about about prioritizing update requests from other departments and general site maintenance.

A year after the initial launch, the KLRU website continues to deliver better performance across all devices and networks, higher security, an overall better developer experience for both ongoing maintenance and new projects, and a better user experience with station information and events available with fewer clicks, immediate access to the current on-air schedule, and a dynamic, searchable interface to find and view episode information for each of KLRU’s four channels.

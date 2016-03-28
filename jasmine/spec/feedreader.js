/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* DONE: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        /* DONE: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        function defined(i, value, param) {
            it("has a " + param + " that is defined in feed #" + (i+1), function() {
                expect(value).toBeDefined();
            });
        }

        function notEmpty(i, value, param) {
            it("has a " + param + " that is not empty in feed #" + (i+1), function() {
                expect(value).not.toBe('');
                expect(value.length).not.toBe(0);
            });
        }

        for (var i = 0; i < allFeeds.length; i++) {
            defined(i, allFeeds[i].url, "url");
            notEmpty(i, allFeeds[i].url, "url");
            defined(i, allFeeds[i].name, "name");
            notEmpty(i, allFeeds[i].name, "name");
        }       
    });

    /* DONE: Write a new test suite named "The menu" */
    describe('The menu', function() {
        var body = $('body');
        var hamburger = $('.menu-icon-link');
        var defaultClass = body.attr('class');

        /* DONE: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it ("is hidden by default", function() {
            expect(defaultClass).toBe('menu-hidden');
        });

        /* DONE: Write a test that ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * should have two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */
        it ("toggles visibility on click event", function() {
            hamburger.click();
            expect(body.attr('class')).toBe('');

            hamburger.click();
            expect(body.attr('class')).toBe('menu-hidden');          
        });
    });

    /* DONE: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* DONE: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        it('contain at least one result', function() {
            expect($('.entry').length).toBeGreaterThan(0);
        });
    });


    /* DONE: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* DONE: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        var oldFeed;

        beforeEach(function(done) {
            var oldFeed = $('.feed').html();
            loadFeed(1, function() {
                done();
            });
        });

        it('changes the feed', function() {
          var newFeed = $('.feed').html();
          expect(newFeed).toBeDefined();
          expect(newFeed).not.toBe(oldFeed);
        });
    });


}());

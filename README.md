# Express.js ORM Burger Application

## Requirement
- Create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM. 
- Application should follow the MVC design pattern to query and route data.
- Application should use handlebars to generate HTML to show output.

## Instructions
Just Click on the [live site](https://boiling-headland-69540.herokuapp.com/) and order your burger and eat it.
![Image of Eat-Da-Burger](https://github.com/saraalinazari/burger-HW/blob/master/screenshots/burgerDemo.png?raw=true)
After you insert your favorite burger in the middle column, you can click on Devour! to eat that yummy burger. Then you can see the burger name on the right column.
## Technologies Used
- Node.js
- Express.js NPM Package
- Body Parser NPM Package
- Express Handlebars NPM Package
- Moment.js
- MySQL
- Bootstrap 4
- Heroku

## Code Explanation
### Lesson Learned
- I learned how to use controllers to control view and database in order to handle data and have a dynamic interface to show the data.
- Hosting on heroku to show application using db is more challenging.

### Code Highlights
```
<li>
	{{burger_name}}
	{{#if devour}}
	<section>
	<button class="change-devour" data-id="{{id}}" data-newdevour="{{devour}}">Devour!
		
	</button>
	</section>
	{{else}}
	<section>
	
	</section>
	{{/if}}
</li>
```

```
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
    
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
    
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
```
## Authors
- Sara Alinazari
import React from "react";
import dots from "../Images/dots.svg";
import photo1 from "../Images/photo1.png";
import { BsClock } from "react-icons/bs";
import { GiKnifeFork } from "react-icons/gi";
import { IconContext } from "react-icons";

export default function Header() {
  const data1 = [
    {
      name:
        "1 and 1/2 cups (150g) graham cracker crumbs (about 10 full sheet graham crackers)",
      highlight: "graham cracker crumbs ",
      id: 1,
    },
    {
      name: "5 Tablespoons (70g) unsalted butter, melted",

      highlight: "unsalted butter",
      id: 2,
    },
    {
      name: "1/4 cup (50g) granulated sugar",

      highlight: "granulated sugar",
      id: 3,
    },
  ];

  const data2 = [
    {
      name:
        "four 8-ounce blocks (904g) full-fat cream cheese, softened to room temperature",
      highlight: "cream cheese ",
      id: 1,
    },
    {
      name: "1 cup (200g) granulated sugar",
      highlight: "granulated sugar ",
      id: 2,
    },
    {
      name: "1 cup (240g) full-fat sour cream, at room temperature",
      highlight: "sour cream ",
      id: 3,
    },
    {
      name: "1 teaspoon pure vanilla extract",
      highlight: "pure vanilla extract ",
      id: 4,
    },
    {
      name: "2 teaspoons fresh lemon juice (optional, but recommended)",
      highlight: "fresh lemon juice ",
      id: 5,
    },
    {
      name: "3 large eggs, at room temperature",
      highlight: "eggs ",
      id: 6,
    },
    {
      name:
        "topping suggestions: salted caramel, lemon curd, strawberry topping, chocolate ganache, red wine chocolate ganache, fresh fruit, whipped cream, or raspberry sauce (recipe in notes)",
      // highlight: "",
      id: 7,
    },
  ];

  const data3 = [
    {
      name:
        "Adjust the oven rack to the lower-middle position and preheat oven to 350°F (177°C).",
      id: 1,
    },
    {
      name:
        "Make the crust: Using a food processor, pulse the graham crackers into crumbs. Pour into a medium bowl and stir in sugar and melted butter until combined. (You can also pulse it all together in the food processor.) Mixture will be sandy. Press firmly into the bottom and slightly up the sides of a 9-inch or 10-inch springform pan. No need to grease the pan first. I use the bottom of a measuring cup to pack the crust down tightly. Pre-bake for 8 minutes. Remove from the oven and place the hot pan on a large piece of aluminum foil. The foil will wrap around the pan for the water bath in step 4. Allow crust to slightly cool as you prepare the filling.",
      highlight: "Make the crust: ",
      id: 2,
    },
    {
      name:
        "Make the filling: Using a handheld or stand mixer fitted with a paddle attachment, beat the cream cheese and granulated sugar together on medium-high speed in a large bowl until the mixture is smooth and creamy, about 2 minutes. Add the sour cream, vanilla extract, and lemon juice then beat until fully combined. On medium speed, add the eggs one at a time, beating after each addition until just blended. After the final egg is incorporated into the batter, stop mixing. To help prevent the cheesecake from deflating and cracking as it cools, avoid over-mixing the batter as best you can.",
      highlight: "Make the filling: ",
      id: 3,
    },
    {
      name:
        "Prepare the simple water bath (see note) Boil a pot of water. You need 1 inch of water in your roasting pan for the water bath, so make sure you boil enough. I use an entire kettle of hot water. As the water is heating up, wrap the aluminum foil around the springform pan. Pour the cheesecake batter on top of the crust. Use a rubber spatula or spoon to smooth it into an even layer. Place the pan inside of a large roasting pan. Carefully pour the hot water inside of the pan and place in the oven. (Or you can place the roasting pan in the oven first, then pour the hot water in. Whichever is easier for you.",
      //   highlight: "Prepare the simple water bath (see note):"
      id: 4,
    },
    {
      name:
        "Bake cheesecake for 55-70 minutes or until the center is almost set. When it’s done, the center of the cheesecake will slightly wobble if you gently shake the pan. Turn the oven off and open the oven door slightly. Let the cheesecake sit in the oven in the water bath as it cools down for 1 hour. Remove from the oven and water bath, then cool cheesecake completely at room temperature. Then refrigerate the cheesecake for at least 4 hours or overnight.",
      highlight: "Bake cheesecake",
      id: 5,
    },
    {
      name:
        "Use a knife to loosen the chilled cheesecake from the rim of the springform pan, then remove the rim. Using a clean sharp knife, cut into slices for serving. For neat slices, wipe the knife clean and dip into warm water between each slice.",
      id: 6,
    },
    {
      name:
        "Serve cheesecake with desired toppings. Cover and store leftover cheesecake in the refrigerator for up to 5 days.",
      id: 7,
    },
  ];
  return (
    <div className="container">
      <header className="">
        <h1 className="header_title">Classic Cheesecake Recipe</h1>
        <div className="section_one">
          <div>
            {" "}
            <img src={dots} alt="dotsvg" className="header_svg" />
          </div>
          <p className="header_content">
            Look no further for a creamy and ultra smooth classic cheesecake
            recipe! Paired with a buttery graham cracker crust, no one can deny
            its simple decadence. For the best results, bake in a water bath.
          </p>
        </div>
        <img src={photo1} alt="headerimage" className="header_image" />
      </header>

      <div className="content_one">
        <div className="content_left">
          <h2 className="content_left_heading">Ingredients</h2>

          <p className="content_left_para">Graham Cracker Crust</p>
          {data1.map((item) => {
            const pieces = item.name.split(item.highlight);

            return (
              <div className="checkbox_one" key={item.id}>
                <label htmlFor="" className="checkbox_label">
                  <input type="checkbox" className="checkbox_input" />
                  {pieces[0]}
                  <span className="inline_style">{item.highlight}</span>
                  {pieces[1]}
                </label>
              </div>
            );
          })}

          <p className="content_left_para">Chocolate</p>
          {data2.map((item) => {
            const pieces2 = item.name.split(item.highlight);

            return (
              <div className="checkbox_one" key={item.id}>
                <label htmlFor="" className="checkbox_label">
                  <input type="checkbox" className="checkbox_input" />
                  {pieces2[0]}
                  <span className="inline_style">{item.highlight}</span>
                  {pieces2[1]}
                </label>
              </div>
            );
          })}
        </div>
        <div className="content_right">
          <div className="content_right_one">
            <div className="right_one_inner">
              <IconContext.Provider
                value={{ color: "#F2994A", className: "global-class-name" }}
              >
                {" "}
                <GiKnifeFork />{" "}
              </IconContext.Provider>
              <section className="">
                <span className="span_one">Yields</span>
                <h4 className="section_one_heading">12 servings</h4>
              </section>
            </div>
          </div>
          <div className="content_right_two">
            <div className="rigth_two_inner">
              <div className="right_two">
                <IconContext.Provider
                  value={{ color: "#4F4F4F", className: "icon" }}
                >
                  {" "}
                  <BsClock />{" "}
                </IconContext.Provider>
                <section>
                  <span className="span_two">Prep TIme</span>
                  <h4 className="span_two_heading">45 minutes</h4>
                </section>
              </div>
              <div className="right_two">
                <IconContext.Provider
                  value={{ color: "#4F4F4F", className: "icon" }}
                >
                  {" "}
                  <BsClock />{" "}
                </IconContext.Provider>
                <section>
                  <span className="span_two">Cook Time</span>
                  <h4 className="span_two_heading">1 hour</h4>
                </section>
              </div>
              <div className="right_two">
                <IconContext.Provider
                  value={{ color: "#4F4F4F", className: "icon" }}
                >
                  {" "}
                  <BsClock />{" "}
                </IconContext.Provider>
                <section>
                  <span className="span_two">Total Time</span>
                  <h4 className="span_two_heading">7,75 hours</h4>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content_two">
        <h1 className="content_two_header">Instructions</h1>
        <ol>
          {data3.map((item) => {
            const pieces3 = item.name.split(item);
            return (
              <li key={item.id} className="list_items">
                {pieces3[0]}
                <span className="inline_style">{item.highlight}</span>
                {pieces3[1]}
              </li>
            );
          })}
        </ol>
      </div>
      <h2 className="source">
        Source: https://sallysbakingaddiction.com/classic-cheesecake/{" "}
      </h2>
      <footer>
        <a href="https://github.com/femakin/" className="footer_content">
          Femi @
        </a>
        <a href="https://devchallenges.io/" className="footer_content">
          DevChallenges.io
        </a>
      </footer>
    </div>
  );
}

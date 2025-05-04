function normalize(str) {
    return str.toLowerCase().replace(/\s+/g, '');
  }
  
  function suggestRecipe() {
    const selected = Array.from(document.getElementById("ingredient-select").selectedOptions)
      .map(opt => normalize(opt.value));
    const output = document.getElementById("recipe-result");
    const key = selected.sort().join(",");
  
    const recipes = {
        "bread,potato": "Try making Bread Aloo Tikki Sandwich 🥪!",
        "besan,onion": "Make some tasty Besan Chilla 🌮!",
        "rice,tomato": "How about Tomato Rice 🍅🍚?",
        "paneer,capsicum,onion": "Paneer Tikka with grilled veggies!",
        "poha,onion,peas": "Classic Breakfast Poha 🥣!",
        "egg,bread": "Make a quick Egg Sandwich!",
        "oats,banana,honey": "Oats Banana Porridge for a healthy start!",
        "pasta,tomato,cheese": "Yummy Tomato Cheese Pasta 🍝!",
        "milk,suji": "Cook Suji Kheer with milk 🍶!",
        "rice,curd": "Try refreshing Curd Rice 🍚!",
        "flour,curd,onion": "Make Onion Paratha 🫓!",
        "besan,methi,onion": "Delicious Methi Thepla!",
        "moong dal,onion,garlic": "Spicy Moong Dal Tadka 🍲!",
        "rice,dal,ghee": "Wholesome Khichdi 🥘!",
        "corn,cheese,bread": "Corn Cheese Toast!",
        "mushroom,onion,garlic": "Mushroom Stir Fry 🍄!",
        "spinach,paneer": "Palak Paneer for dinner 🥬!",
        "capsicum,onion,flour": "Veggie Quesadilla 🌮!",
        "egg,onion,tomato": "Healthy Egg Bhurji 🍳!",
        "banana,curd,honey": "Banana Smoothie 🥤!",
        "dal,flour,onion": "Dal Paratha 🫓!",
        "chana,onion,tomato": "Quick Chana Chaat!",
        "rajma,tomato,onion": "Rajma Masala 🍛!",
        "bajra,flour,onion": "Rustic Bajra Roti 🍪!",
        "makka,flour,onion": "Makka ki Roti with pickle!",
        "carrot,beetroot,cabbage": "Healthy Mixed Veg Salad 🥗!",
        "flour,cheese,garlic": "Garlic Cheese Naan!",
        "soya chunks,onion,tomato": "Protein-rich Soya Curry!",
        "semolina,onion,carrot": "Crispy Rava Uttapam!",
        "rice,milk,sugar": "Creamy Rice Kheer 🍚!",
        "paneer,peas,onion": "Matar Paneer Curry 🍛!",
        "bread,tomato,cheese": "Cheesy Tomato Toast 🍞!",
        "potato,flour": "Masala Aloo Paratha 🫓!",
        "cucumber,tomato,onion": "Fresh Kachumber Salad!",
        "banana,oats,milk": "Banana Oat Smoothie!",
        "green chili,ginger,garlic": "Tadka for any dal!",
        "spinach,onion,flour": "Spinach Paratha 🫓!",
        "capsicum,tomato,onion": "Mixed Veg Sabzi!",
        "methi,potato,onion": "Aloo Methi Delight!",
        "milk,oats,honey": "Simple Honey Oats Porridge!",
        "paneer,tomato,onion": "Paneer Butter Masala!"
      };
  
    if (recipes[key]) {
      output.innerText = recipes[key];
    } else {
      output.innerText = "Try making mixed veg sabzi, khichdi, or sandwich with your ingredients!";
    }
  }
  
  function suggestHealthyAlt() {
    const selected = Array.from(document.getElementById("craving-select").selectedOptions)
      .map(opt => normalize(opt.value));
    const result = document.getElementById("alt-result");
  
    const suggestions = {
      pizza: "Try roti wrap with veggies and paneer!",
      burger: "Grilled veggie burger on whole wheat bun!",
      fries: "Air-fried sweet potato wedges!",
      chips: "Roasted makhana or baked banana chips!",
      icecream: "Frozen banana blended with cocoa!",
      chocolate: "Dark chocolate (min 70%) is better!",
      soda: "Go for lemon water or fruit-infused water!",
      cake: "Try oats banana mug cake!",
      milkshake: "Smoothie with banana and almond milk!",
      golgappe: "Use baked puris and boiled sprouts!",
      samosa: "Air-fry or bake samosas with veggie filling!",
      brownie: "Oats and cocoa brownies with jaggery!",
      coldcoffee: "Use jaggery + almond milk + instant coffee!",
      jalebi: "Honey-coated baked spirals as a healthier take!",
      popcorn: "Air-popped popcorn without butter!",
      nachos: "Use baked khakra or whole wheat nachos!"
    };
  
    if (selected.length === 0) {
      result.innerText = "Please select at least one craving.";
      return;
    }
  
    result.innerHTML = "<strong>Healthy alternatives:</strong><br>";
    selected.forEach(item => {
      result.innerHTML += `• ${suggestions[item] || "Try fruits, nuts or healthier homemade snacks!"}<br>`;
    });
  }
  
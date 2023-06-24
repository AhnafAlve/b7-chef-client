import React from 'react';

const Faq = () => {
  return (
    <div className="accordion container my-5" id="accordionExample">
      <h2 className='text-center my-5'>FREQUENTLY ASKED QUESTIONS</h2>
      <div className="accordion-item ">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Question 1: How do I get started with Chef's Recipes?
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            Answer 1: To get started with Chef's Recipes, you can create an account, browse through the available recipes, and start cooking delicious meals in your own kitchen!
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Question 2: Can I save my favorite recipes?
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            Answer 2: Yes, you can save your favorite recipes by clicking the "Save" button on the recipe page. This way, you can easily access them later in your profile's saved recipes section.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Question 3: How can I submit my own recipes?
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            Answer 3: If you would like to share your recipes with the Chef's Recipes community, you can submit them through the "Submit Recipe" feature in your dashboard. Our team will review the recipe, and if approved, it will be published for others to enjoy.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingFour">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            Question 4: Can I modify a recipe to suit my dietary restrictions?
          </button>
        </h2>
        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            Answer 4: Absolutely! You can modify any recipe to suit your dietary restrictions or preferences. Feel free to substitute ingredients or adjust the quantities as needed. Cooking should be enjoyable and tailored to your needs.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingFive">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
            Question 5: How can I contact the Chef's Recipes support team?
          </button>
        </h2>
        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            Answer 5: If you have any questions, issues, or feedback, you can reach out to our support team through the contact page on our website. We'll be happy to assist you with any concerns you may have.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

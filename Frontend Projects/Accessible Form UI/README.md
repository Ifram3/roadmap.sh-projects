## Accessible Form UI

### Description
In this project, I am required to create a form UI using only HTML and CSS. The form will include fields for a full name, email, password, and confirm password, along with a button to toggle the visibility of the password text. Additionally, the form will feature a completeness progress bar and a checklist of requirements that must be met for the form to reach 100% completeness. While this version of the form won’t be functional, it will be a static UI component that can be enhanced with JavaScript in the future.

The goal of this project is to not only help me practice my HTML and CSS but also to focus on creating an accessible form that is easy to use for all users, including those with disabilities. Given below is the rough mockup of the form UI that you need to create:

![form-component](images/form-components-7t4b3.png)

### Accessibility Guidelines

You should read up on accessibility guidelines and best practices before starting this project. However, here are some key points to keep in mind while creating an accessible form UI:

- **Labeling**: Ensure that each form field has a corresponding ``<label>`` element associated with the field using the for attribute.

- **Focus State**: Style the focus state of each input field so that users navigating with a keyboard can easily see which field is currently active.

- **Error Messaging**: Consider adding space for error messages that can be displayed when a user inputs invalid data. These messages should be clearly associated with the relevant input field.

- **ARIA Attributes**: Use ARIA (Accessible Rich Internet Applications) attributes where necessary, such as aria-required for required fields and aria-invalid for fields with errors.

- **Color Contrast**: Ensure that the color contrast between text and background is sufficient to meet WCAG (Web Content Accessibility Guidelines) standards, making the form readable for users with visual impairments.

- **Interactive Elements**: Make sure that the button to show/hide the password is accessible via keyboard and screen readers and provides clear feedback on the current state (e.g., “Password is hidden” or “Password is visible”).

Once done, you can test the form UI using a screen reader or browser extensions like Axe or Lighthouse to check for accessibility issues and make necessary adjustments.

After completing this project, you will have a solid foundation in creating accessible and well-structured forms using HTML and CSS. You can later enhance this form by adding JavaScript to make it fully functional and dynamic in future projects.

### How to view this project:
1. Clone this repository to your local machine.
    ```bash
    git clone https://github.com/Ifram3/accessible-form-ui.git
    ```
2. Open the `index.html` file in your preferred web browser to view the form UI. 

3. You can also open the `style.css` file in your preferred code editor to view. 

### Technologies used:
- **HTML5** for structuring the page semantically
- **CSS3** for styling and layout
- **Git** for version control
- **Flexbox** for creating flexible and responsive layouts
- **CSS Pseudo-elements** for styling elements based on their content
- **ARIA attributes** for improving accessibility
- **WCAG guidelines** for ensuring accessibility and usability

### Acknowledgement
Website Template Inspired by [Roadmap.sh](https://roadmap.sh/projects/accessible-form-ui) And you can still checkout the project [here](https://roadmap.sh/projects/accessible-form-ui) 



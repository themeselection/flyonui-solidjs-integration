const FormElementsItem = () => {
  return (
    <div>
      <h1 class="text-xl font-medium mb-4">Input</h1>

      <div class="w-96">
        <label class="label-text" for="labelAndHelperText">Full Name</label>
        <input type="text" placeholder="John Doe" class="input" id="labelAndHelperText" />
        <span class="helper-text">Please write your full name</span>
      </div>

      <h1 class="text-xl font-medium mb-4 mt-6">Radio</h1>

      <div class="flex items-center gap-1">
        <input type="radio" name="radio-0" class="radio radio-primary" id="defaultRadio1" />
        <label class="label-text text-base" for="defaultRadio1"> Default </label>
      </div>
      <div class="flex items-center gap-1">
        <input type="radio" name="radio-0" class="radio radio-primary" id="defaultRadio2" checked />
        <label class="label-text text-base" for="defaultRadio2"> Checked </label>
      </div>

      <h1 class="text-xl font-medium mb-4 mt-6">Checkbox</h1>

      <div class="flex items-center gap-1">
        <input type="checkbox" class="checkbox checkbox-primary" id="defaultCheckbox1" />
        <label class="label-text text-base" for="defaultCheckbox1">Default</label>
      </div>
      <div class="flex items-center gap-1">
        <input type="checkbox" class="checkbox checkbox-primary" id="defaultCheckbox2" checked />
        <label class="label-text text-base" for="defaultCheckbox2">Checked</label>
      </div>

      <h1 class="text-xl font-medium mb-4 mt-6">Switch</h1>

      <div class="flex items-center gap-1">
        <input type="checkbox" class="switch switch-primary" id="switchType1" />
        <label class="label-text text-base" for="switchType1"> Default </label>
      </div>
      <div class="flex items-center gap-1">
        <input type="checkbox" class="switch switch-primary" id="switchType2" checked />
        <label class="label-text text-base" for="switchType2"> Checked </label>
      </div>
    </div>
  );
};

export default FormElementsItem;

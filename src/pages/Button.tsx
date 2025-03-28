import ButtonItem from '../components/ButtonItem';

const Button = () => {
  return (
    <div>
      <h1 class="text-xl font-medium mb-4">Solid Buttons</h1>
      <div class="flex flex-wrap gap-2">
        <ButtonItem classes="btn-primary" content="Primary" />
        <ButtonItem classes="btn-info" content="Info" />
        <ButtonItem classes="btn-success" content="Success" />
        <ButtonItem classes="btn-warning" content="Warning" />
        <ButtonItem classes="btn-error" content="Error" />
      </div>

      <h1 class="text-xl font-medium mb-4 mt-6">Soft Buttons</h1>
      <div class="flex flex-wrap gap-2">
        <ButtonItem classes="btn-soft btn-primary" content="Primary" />
        <ButtonItem classes="btn-soft btn-info" content="Info" />
        <ButtonItem classes="btn-soft btn-success" content="Success" />
        <ButtonItem classes="btn-soft btn-warning" content="Warning" />
        <ButtonItem classes="btn-soft btn-error" content="Error" />
      </div>
      <h1 class="text-xl font-medium mb-4 mt-6">Outline Buttons</h1>
      <div class="flex flex-wrap gap-2">
        <ButtonItem classes="btn-outline btn-primary" content="Primary" />
        <ButtonItem classes="btn-outline btn-info" content="Info" />
        <ButtonItem classes="btn-outline btn-success" content="Success" />
        <ButtonItem classes="btn-outline btn-warning" content="Warning" />
        <ButtonItem classes="btn-outline btn-error" content="Error" />
      </div>
      <h1 class="text-xl font-medium mb-4 mt-6">Text Buttons</h1>
      <div class="flex flex-wrap gap-2">
        <ButtonItem classes="btn-text btn-primary" content="Primary" />
        <ButtonItem classes="btn-text btn-info" content="Info" />
        <ButtonItem classes="btn-text btn-success" content="Success" />
        <ButtonItem classes="btn-text btn-warning" content="Warning" />
        <ButtonItem classes="btn-text btn-error" content="Error" />
      </div>
      <h1 class="text-xl font-medium mb-4 mt-6">Gradient Buttons</h1>
      <div class="flex flex-wrap gap-2">
        <ButtonItem classes="btn-gradient btn-primary" content="Primary" />
        <ButtonItem classes="btn-gradient btn-info" content="Info" />
        <ButtonItem classes="btn-gradient btn-success" content="Success" />
        <ButtonItem classes="btn-gradient btn-warning" content="Warning" />
        <ButtonItem classes="btn-gradient btn-error" content="Error" />
      </div>
    </div>
  );
};

export default Button;

import AccordionGroup from '../components/AccordionGroup';
import AccordionWithAvatar from '../components/AccordionWithAvatar';

const Accordion = () => {
  return (
    <div>
      <h1 class="text-xl font-medium mb-4">Default Accordion</h1>
      <AccordionGroup />

      <h1 class="text-xl font-medium mb-4 mt-6">Accordion With Avatar</h1>
      <AccordionWithAvatar />
    </div>
  );
};

export default Accordion;

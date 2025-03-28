const OverlaysItem = () => {
  return (
    <div>
      <h1 class="text-xl font-medium mb-4">Modal</h1>

      <button type="button" class="btn btn-primary" aria-haspopup="dialog" aria-expanded="false" aria-controls="basic-modal" data-overlay="#basic-modal" > Open modal </button>

      <div id="basic-modal" class="overlay modal overlay-open:opacity-100 hidden overlay-open:duration-300" role="dialog" tabindex="-1">
        <div class="modal-dialog overlay-open:opacity-100 overlay-open:duration-300">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title">Dialog Title</h3>
              <button type="button" class="btn btn-text btn-circle btn-sm absolute end-3 top-3" aria-label="Close" data-overlay="#basic-modal" >
                <span class="icon-[tabler--x] size-4"></span>
              </button>
            </div>
            <div class="modal-body">
              This is some placeholder content to show the scrolling behavior for modals. Instead of repeating the text in the
              modal, we use an inline style to set a minimum height, thereby extending the length of the overall modal and
              demonstrating the overflow scrolling. When content becomes longer than the height of the viewport, scrolling
              will move the modal as needed.
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-soft btn-secondary" data-overlay="#basic-modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      <h1 class="text-xl font-medium mb-4 mt-6">Drawer(Offcanvas)</h1>
      <button type="button" class="btn btn-primary" aria-haspopup="dialog" aria-expanded="false" aria-controls="overlay-end-example" data-overlay="#overlay-end-example">Open Drawer</button>

      <div id="overlay-end-example" class="overlay overlay-open:translate-x-0 drawer drawer-end hidden" role="dialog" tabindex="-1">
        <div class="drawer-header">
          <h3 class="drawer-title">Drawer Title</h3>
          <button type="button" class="btn btn-text btn-circle btn-sm absolute end-3 top-3" aria-label="Close" data-overlay="#overlay-end-example">
            <span class="icon-[tabler--x] size-5"></span>
          </button>
        </div>
        <div class="drawer-body">
          <p>
            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
          </p>
        </div>
        <div class="drawer-footer">
          <button type="button" class="btn btn-soft btn-secondary" data-overlay="#overlay-end-example">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  );
};

export default OverlaysItem;

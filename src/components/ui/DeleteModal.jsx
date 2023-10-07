import Button from "./Button";
import Modal from "./Modal";

function DeleteModal({ resourceName, onClick, onConfirm }) {
  return (
    <Modal onClick={onClick}>
      <p className="p-2 pb-4 font-medium text-lg">
        Are you sure you want to delete this {resourceName}?
      </p>
      <div className="pt-4 flex justify-end space-x-2">
        <Button onClick={onClick} type="secondary">
          Cancel
        </Button>
        <Button type="danger" onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </Modal>
  );
}

export default DeleteModal;

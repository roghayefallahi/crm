function Modal({setShowModal,deleteHandler }) {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black/50">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80">
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            آیا مطمئن هستید؟
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            این عملیات قابل بازگشت نیست!
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={deleteHandler}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition font-semibold"
            >
              بله، حذف شود
            </button>
            <button
              onClick={() => setShowModal(false)}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg transition font-semibold"
            >
              لغو
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;

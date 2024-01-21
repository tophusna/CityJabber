import { useState } from "react";

const ActionsButton1 = ({ index, onPermit }) => {
  const handleActionClick = (action) => {
    switch (action) {
      case 'permit':
        onPermit(index, 2)
        return
      case 'refuse':
        onPermit(index, 0)
        return
    }
  };

  const actions = [
    { label: "Permit", value: "permit" },
    { label: "Refuse", value: "refuse" },
  ];

  return (
    <div className="dropdown js-dropdown js-actions-1-active">
      <div
        className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5"
        data-bs-toggle="dropdown"
        data-bs-auto-close="true"
        aria-expanded="false"
        data-bs-offset="0,10"
      >
        <span className="js-dropdown-title">
          Actions
        </span>
        <i className="icon icon-chevron-sm-down text-7 ml-10" />
      </div>
      <div className="toggle-element -dropdown-2 js-click-dropdown dropdown-menu">
        <div className="text-14 fw-500 js-dropdown-list">
          {actions.map((action) => (
            <div key={action.value}>
              <button
                className="d-block js-dropdown-link"
                onClick={() => handleActionClick(action.value)}
              >
                {action.label}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActionsButton1;

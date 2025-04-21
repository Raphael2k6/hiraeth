import React, { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextProps {
  openScheduleModal: boolean;
  handleOpenScheduleModal: () => void;
  handleCloseScheduleModal: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [openScheduleModal, setOpenScheduleModal] = useState(false);

  const handleOpenScheduleModal = () => {
    setOpenScheduleModal(true);
  };
  const handleCloseScheduleModal = () => {
    setOpenScheduleModal(false);
  };

  const contextValue = React.useMemo(
    () => ({
      openScheduleModal,
      handleOpenScheduleModal,
      handleCloseScheduleModal,
    }),
    [openScheduleModal]
  );

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }
  return context;
};

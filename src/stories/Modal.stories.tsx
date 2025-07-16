// src/stories/Modal.stories.tsx
import { BaseModal } from '../components/modals/BaseModal';
import { useState } from 'react';

export default {
    title: 'Modals/BaseModal',
    component: BaseModal,
};

// Компонент с кнопкой для открытия модалки
export const Default = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(true)}>Open Modal</button>
            <BaseModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <h2>Hello from Modal!</h2>
            </BaseModal>
        </div>
    );
};
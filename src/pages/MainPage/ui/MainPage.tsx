import { FC, useState } from 'react';

import { Button } from '@/shared/ui/Button';
import { Modal } from '@/shared/ui/Modal/Modal';

export const MainPage: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onClose = () => {
        setIsOpen(false);
        console.log(isOpen);
    };

    return (
        <>
            Main Page
            <Button onClick={() => setIsOpen(true)}>Modal</Button>
            <br />
            <Modal isOpen={isOpen} onClose={onClose}>
                <p>
                    123454321312312323231313323213178372193723971203127931293712097
                </p>
            </Modal>
        </>
    );
};

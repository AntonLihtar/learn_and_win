// src/stories/Button.stories.tsx
import { Button } from '../components/ui/Button';

// Настройки для Storybook
export default {
    title: 'UI/Button',  // Путь в меню
    component: Button,   // Компонент
};

// Варианты кнопки
export const Primary = () => <Button variant="primary">Click me</Button>;
export const Secondary = () => <Button variant="secondary">Cancel</Button>;
export const Red = () => <Button variant="red">Cancel</Button>;
// export const Disabled = () => <Button disabled>Disabled</Button>;
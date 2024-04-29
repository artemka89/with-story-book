// import { FC } from 'react';
// import classNames from 'classnames';

// import { ProfileForm } from '@/features/ProfileForm/ui/ProfileForm';

// import styles from './EditableProfileCard.module.scss';

// interface EditableProfileCardProps {
//     id: string;
//     className?: string;
// }

// export const EditableProfileCard: FC<EditableProfileCardProps> = ({
//     id,
//     className,
// }) => {
//     const { data } = useGetUserProfileQuery({ userId: id });

//     return (
//         <div className={classNames(styles.editableProfileCard, className)}>
//             <ProfileForm />
//         </div>
//     );
// };

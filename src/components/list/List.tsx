import { ReactChild } from 'react';
import { ReactNode } from 'react';

interface IProps<T> {
    items: T[];
    renderItems(item: T): ReactNode | ReactChild;
}

export default function List<T>(props: IProps<T>) {
    return (
        <>
            {props.items.map(props.renderItems)}
        </>
    )
}
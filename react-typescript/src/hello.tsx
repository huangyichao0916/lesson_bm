import * as React from 'react';

export interface Props {
    userName: string,
}
export const HelloComponent = (props: Props) => (
    <h2>
        hello user:{props.userName}
    </h2>
)
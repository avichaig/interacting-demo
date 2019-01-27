import React from "react";

import styles from './Standing.module.css';

const standing = (props) => {
    return (
        <tr>
            <th scope="row">{props.index}</th>
            <td>
                <div className={styles.parent}>
                    <img className={`rounded ${styles.teamImg}`} src={`https://d31akyg3iluyon.cloudfront.net/teams/${props.standing.team.key}.png`} alt="..." />
                    <p className={styles.teamText}>{props.standing.team.name}</p>
                </div>
            </td>
            <td>{props.standing.played}</td>
            <td>{props.standing.wins}</td>
            <td>{props.standing.loses}</td>
            <td>{props.standing.no_run_rate}</td>
            <td>{props.standing.points}</td>
        </tr>
    )
};

export default standing;
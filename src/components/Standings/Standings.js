import React from 'react';

import Standing from './Standing/Standing';

const standings = (props) => {
    return (
        <div>
            <h2>Standings</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Team</th>
                        <th scope="col">Played Game</th>
                        <th scope="col">Winnings</th>
                        <th scope="col">Loses</th>
                        <th scope="col">NRR</th>
                        <th scope="col">Pointes</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.standings.map((standing, index) => {
                           return <Standing key={index}
                                        index={index} standing={standing}></Standing>;
                        })
                    }
                </tbody>
            </table>
        </div>
    )
};

export default standings;
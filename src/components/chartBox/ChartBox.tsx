import { Link } from "react-router-dom"
import "./chartBox.scss"
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"

type Props = {
    color: string;
    icon: string;
    title: string;
    dataKey: string;
    number: string | number;
    percentage: number;
    chartData: object[]; 

}

const ChartBox = (props: Props) => {
  return (
    <div className="chartBox">

        <div className="boxInfo">
            <div className="title">
                <img 
                src={props.icon} 
                alt="" 
                style={{ display: 'block', width: '32px', height: '32px' }}
                />
                <span> {props.title}</span>
            </div>
            <h1>{props.number}</h1>
            <Link to='/home' style={{color:props.color}}>
                View all
            </Link>
        </div>

        <div className="chartInfo">
            <div className="chart">
            <ResponsiveContainer width="99%" height="100%">
                <LineChart data={props.chartData}>
                <Tooltip
                    contentStyle={{ background:'transparent', border: 'none' }}
                    labelStyle={{ display: 'none' }}
                    position={{ x:20, y:70}}
                />
                <Line 
                    type="monotone" 
                    dataKey={props.dataKey} 
                    stroke={props.color} 
                    strokeWidth={2} 
                    dot = {false}
                    />
                </LineChart>
            </ResponsiveContainer>
            </div>

            <div className="texts">
                <span className="percentage" style={{color: props.percentage<0 ? 'tomato' : 'limegreen'}}>{props.percentage}%</span>
                <span className="duration">this month</span>
            </div>
        </div>

    </div>
  )
}

export default ChartBox
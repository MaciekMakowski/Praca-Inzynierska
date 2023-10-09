import { Box,Button, Typography } from "@mui/material"
import {ResponsiveCalendar} from '@nivo/calendar'

type dayInfo = {
    day: string,
    value: number
}

type dataType = {
    data: dayInfo[]
}
const CalendarChart = (props:dataType) => {

    return (
        <Box 
            sx={{
                display:'flex',
                flexDirection:'column',
                height:'80%',
                width:'100%',
                alignItems:'center',
            }}
        >
            <Typography variant="subtitle1">Odwiedźiny wolontariuszy</Typography>
            <ResponsiveCalendar
                data={props.data}
                from={props.data[0].day}
                to={props.data[props.data.length-1].day}
                emptyColor="#eeeeee"
                colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
                margin={{right: 40, bottom: 10, left: 40 }}
                yearSpacing={40}
                monthBorderColor="#ffffff"
                dayBorderWidth={2}
                dayBorderColor="#ffffff"
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'row',
                        translateY: 36,
                        itemCount: 4,
                        itemWidth: 42,
                        itemHeight: 36,
                        itemsSpacing: 14,
                        itemDirection: 'right-to-left'
                    }
                ]}
            />

            <Button 
                variant='outlined'
                sx={{
                    width:'fit-content',
                }}
                >
                    Przejdź
            </Button>
        </Box>
    )
}

export default CalendarChart
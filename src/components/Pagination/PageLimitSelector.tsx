import { MenuItem } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent, SelectProps } from "@mui/material/Select";
import { JSX } from "react";
import { usePagination } from "./hooks";
import { DEFAULT_LIMIT_OPTIONS } from "./consts";

export type LimitSelectorProps = Omit<SelectProps<number>, 'value' | 'label' | 'onChange'> & {
    label: string
    limitOptions?: number[]
}

export function PageLimitSelector(props: LimitSelectorProps): JSX.Element {
    const { label, limitOptions, ...rest } = props

    const options = limitOptions ?? DEFAULT_LIMIT_OPTIONS
    
    const { 
        pagination: { limit },
        changePageLimit,
    } = usePagination()

    const handleOnChange = (event: SelectChangeEvent<number>) => {
        changePageLimit(event.target.value)
    }

    return <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select {...rest} value={limit} label={label} onChange={handleOnChange}>
            {
                options.map(
                    (option: number) => <MenuItem key={option} value={option}>{option}</MenuItem>
                )
            }
        </Select>
    </FormControl>
}
import { useContext, useEffect, useState } from "react"
import UserContext from "../../UserContext"

const ProgressBar = () => {
    const { contracts } = useContext(UserContext)
    const contract = contracts.Main
    const [total, setTotal] = useState(0)
    const [inSale, setInSale] = useState(0)

    useEffect(() => {
        const getSaleProgress = async () => {
            setInSale((await contract.inSale()).toNumber())
            setTotal((await contract.totalTokensForPresale()).toNumber())
        }
        getSaleProgress();
    })

    return (
        <>
            <div className="bar">
                <div className="sub-bar" style={{ width: (total ? ((total - inSale) / total) : 0) + "%" }}></div>
            </div>
            <p className="progress-1">
                Progress <span className="pr-num">{total ? Math.floor(100 * (total - inSale) / total) : 0}%</span>({(total - inSale).toLocaleString()}/{total.toLocaleString()})
            </p>
        </>
    )
}

export default ProgressBar
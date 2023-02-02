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
            <div className="head-bar">
                <div className="fill-bar" style={{ width: (total ? ((total - inSale) / total) : 0) + "%" }}></div>
                <img src="https://ik.imagekit.io/cforcrypto/fire.webp" alt="" className="fire-1" />
            <img src="https://ik.imagekit.io/cforcrypto/Group_64.png" alt="" className="bullet-1" />
            </div>
            <p className="bar-info">
                Progress <span className="green">{total ? Math.floor(100 * (total - inSale) / total) : 0}%</span>({(total - inSale).toLocaleString()}/{total.toLocaleString()})
            </p>
        </>
    )
}

export default ProgressBar
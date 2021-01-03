import express, { Request, Response, Router } from 'express'

const router: Router = express.Router()

interface Test {
    cat: string,
    dog: number,
    [key: string]: any
}

router.get('/', (req: Request, res: Response) => {
    res.json({
        ts: 'typescript!',
        blue: 'green'
    })

    let green: number = 44
    green = 34

    const arr: number[] = []

    arr.push(3)

    let obj: Test = {
        cat: 'blue',
        dog: 33,
        meow: '33'
    }

    console.log(obj, arr)
})

export default router
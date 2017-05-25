
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of'

const chapters = []

let nextId = 0

class CampaignService {
    
    getChapters(campaignId){
        return Observable.of(chapters)
    }

    getChapter({ campaignId, chapterId }){
        return Observable.of(
            chapters.reduce((agg, chapter) => {
                if(chapter.id === chapterId)
                    return chapter
            }, null)
        )
    }

    saveChapter({ campaignId, chapterId, chapterTitle, chapterContent }){
        const idToSave = chapterId ? chapterId : nextId++
        chapters.push({ id: idToSave, title: chapterTitle, content: chapterContent })
        return Observable.of(chapters)
    }
}

export default CampaignService
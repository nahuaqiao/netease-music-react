import { json } from 'stream/consumers'
import { PlaylistCardPropType } from '../components/RecommendPlaylist/PlaylistCard'
import {
  EXHIBIT_CARD_COUNT,
  PlaylistCategory,
} from '../hooks/RecommendPlaylistHooks'
import Api from './Api'

// import { PlaylistCardPropType } from '@/components/PlaylistCard'
// import { EXHIBIT_CARD_COUNT } from '@/components/PlaylistExhibit'
// import { PlaylistCategory } from '@/hooks/PlaylistHooks'

export type OfficialRecommendResponseType = {
  id: number
  name: string
  picUrl: string
  playCount: number
  trackCount: number
}

export const getOfficicalRecommendResponse = async (
  limit: number,
  offset: number
): Promise<{ data: { result: OfficialRecommendResponseType[] } }> => {
  return await Api(`/personalized?limit=${limit}&offset=${offset}`)
}

export const getOfficialRecommendData = async (
  limit: number = EXHIBIT_CARD_COUNT,
  offset: number
): Promise<PlaylistCardPropType[]> => {
  const response = await getOfficicalRecommendResponse(limit, offset)
  return response.data.result.map(
    ({
      id,
      name,
      picUrl,
      playCount,
      trackCount,
    }: OfficialRecommendResponseType) => ({
      id,
      name,
      coverImgUrl: picUrl,
      playCount,
      trackCount,
    })
  )
}

export type TopPlaylistResponseType = {
  id: number
  name: string
  coverImgUrl: string
  playCount: number
  trackCount: number
}

export const getTopPlaylistResponse = async (
  playlistCategory: PlaylistCategory,
  limit: number,
  offset: number
): Promise<{ data: { playlists: TopPlaylistResponseType[] } }> => {
  return await Api(
    `/top/playlist?cat=${playlistCategory}&limit=${limit}&offset=${offset}`
  )
}

export const getTopPlaylistData = async (
  playlistCategory: PlaylistCategory,
  limit: number,
  offset: number
): Promise<PlaylistCardPropType[]> => {
  const response = await getTopPlaylistResponse(playlistCategory, limit, offset)
  return response.data.playlists.map(
    ({
      id,
      name,
      coverImgUrl,
      playCount,
      trackCount,
    }: TopPlaylistResponseType) => ({
      id,
      name,
      coverImgUrl,
      playCount,
      trackCount,
    })
  )
}

/**
 * {
    "tracks": [
        {
            "name": "CYBER",
            "id": 1939738265,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 33858251,
                    "name": "Callson",
                    "tns": [],
                    "alias": []
                },
                {
                    "id": 34240773,
                    "name": "AstroWilk",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [],
            "pop": 60,
            "st": 0,
            "rt": "",
            "fee": 8,
            "v": 3,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 143714369,
                "name": "CYBER",
                "picUrl": "http://p4.music.126.net/6ahBazYMFwM5-ZyDj2WUPw==/109951167316904779.jpg",
                "tns": [],
                "pic_str": "109951167316904779",
                "pic": 109951167316904780
            },
            "dt": 163200,
            "h": {
                "br": 320000,
                "fid": 0,
                "size": 6530656,
                "vd": -42186
            },
            "m": {
                "br": 192000,
                "fid": 0,
                "size": 3918411,
                "vd": -39660
            },
            "l": {
                "br": 128000,
                "fid": 0,
                "size": 2612288,
                "vd": -38150
            },
            "sq": null,
            "hr": null,
            "a": null,
            "cd": "01",
            "no": 1,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 1,
            "s_id": 0,
            "mark": 401536,
            "originCoverType": 0,
            "originSongSimpleData": null,
            "tagPicList": null,
            "resourceState": true,
            "version": 3,
            "songJumpInfo": null,
            "entertainmentTags": null,
            "single": 0,
            "noCopyrightRcmd": null,
            "alg": "alg_featured",
            "rtype": 0,
            "rurl": null,
            "mst": 9,
            "cp": 743010,
            "mv": 0,
            "publishTime": 1652976000000
        },
        {
            "name": "Villain",
            "id": 1925491183,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 1147135,
                    "name": "Drezo",
                    "tns": [],
                    "alias": []
                },
                {
                    "id": 212055,
                    "name": "Dread MC",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [],
            "pop": 55,
            "st": 0,
            "rt": "",
            "fee": 8,
            "v": 3,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 141330804,
                "name": "Villain",
                "picUrl": "http://p3.music.126.net/ldmX09bQ-nwSDM7rL6dMsg==/109951167116031162.jpg",
                "tns": [],
                "pic_str": "109951167116031162",
                "pic": 109951167116031170
            },
            "dt": 294193,
            "h": {
                "br": 320000,
                "fid": 0,
                "size": 11770819,
                "vd": -73481
            },
            "m": {
                "br": 192000,
                "fid": 0,
                "size": 7062509,
                "vd": -71013
            },
            "l": {
                "br": 128000,
                "fid": 0,
                "size": 4708354,
                "vd": -69564
            },
            "sq": null,
            "hr": null,
            "a": null,
            "cd": "01",
            "no": 1,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 1,
            "s_id": 0,
            "mark": 1319040,
            "originCoverType": 0,
            "originSongSimpleData": null,
            "tagPicList": null,
            "resourceState": true,
            "version": 3,
            "songJumpInfo": null,
            "entertainmentTags": null,
            "single": 0,
            "noCopyrightRcmd": null,
            "alg": "alg_featured",
            "rtype": 0,
            "rurl": null,
            "mst": 9,
            "cp": 743010,
            "mv": 0,
            "publishTime": 1646928000000
        },
        {
            "name": "Puzzle Box",
            "id": 1925321794,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 1019466,
                    "name": "Rezz",
                    "tns": [],
                    "alias": []
                },
                {
                    "id": 749030,
                    "name": "Subtronics",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [],
            "pop": 85,
            "st": 0,
            "rt": "",
            "fee": 8,
            "v": 2,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 141309992,
                "name": "Puzzle Box",
                "picUrl": "http://p4.music.126.net/99u2KE7P41YbfJYKN_-vHQ==/109951167114061761.jpg",
                "tns": [],
                "pic_str": "109951167114061761",
                "pic": 109951167114061760
            },
            "dt": 212244,
            "h": {
                "br": 320000,
                "fid": 0,
                "size": 8490885,
                "vd": -55010
            },
            "m": {
                "br": 192000,
                "fid": 0,
                "size": 5094548,
                "vd": -52424
            },
            "l": {
                "br": 128000,
                "fid": 0,
                "size": 3396380,
                "vd": -50799
            },
            "sq": null,
            "hr": null,
            "a": null,
            "cd": "01",
            "no": 1,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 1,
            "s_id": 0,
            "mark": 270336,
            "originCoverType": 0,
            "originSongSimpleData": null,
            "tagPicList": null,
            "resourceState": true,
            "version": 2,
            "songJumpInfo": null,
            "entertainmentTags": null,
            "single": 0,
            "noCopyrightRcmd": null,
            "alg": "alg_featured",
            "rtype": 0,
            "rurl": null,
            "mst": 9,
            "cp": 7003,
            "mv": 0,
            "publishTime": 1646323200000
        },
        {
            "name": "Act Like You Know",
            "id": 1891372914,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 37751,
                    "name": "Krafty Kuts",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [],
            "pop": 45,
            "st": 0,
            "rt": "",
            "fee": 8,
            "v": 6,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 135507699,
                "name": "Act Like You Know",
                "picUrl": "http://p3.music.126.net/4YT_eyE665OApxrgIk7n6A==/109951166577075766.jpg",
                "tns": [],
                "pic_str": "109951166577075766",
                "pic": 109951166577075760
            },
            "dt": 246857,
            "h": {
                "br": 320000,
                "fid": 0,
                "size": 9876419,
                "vd": -91763
            },
            "m": {
                "br": 192000,
                "fid": 0,
                "size": 5925869,
                "vd": -89262
            },
            "l": {
                "br": 128000,
                "fid": 0,
                "size": 3950594,
                "vd": -87776
            },
            "sq": {
                "br": 1768359,
                "fid": 0,
                "size": 54566522,
                "vd": -91825
            },
            "hr": null,
            "a": null,
            "cd": "01",
            "no": 1,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 1,
            "s_id": 0,
            "mark": 270336,
            "originCoverType": 0,
            "originSongSimpleData": null,
            "tagPicList": null,
            "resourceState": true,
            "version": 6,
            "songJumpInfo": null,
            "entertainmentTags": null,
            "single": 0,
            "noCopyrightRcmd": null,
            "alg": "alg_featured",
            "rtype": 0,
            "rurl": null,
            "mst": 9,
            "cp": 1416200,
            "mv": 0,
            "publishTime": 1637164800000
        },
        {
            "name": "Under My Skin",
            "id": 1809764463,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 31677820,
                    "name": "Fox Angelous",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [],
            "pop": 80,
            "st": 0,
            "rt": "",
            "fee": 8,
            "v": 9,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 121247555,
                "name": "Under My Skin",
                "picUrl": "http://p3.music.126.net/rv84vglc4hTcNwhkB1h-4Q==/109951166183779873.jpg",
                "tns": [],
                "pic_str": "109951166183779873",
                "pic": 109951166183779870
            },
            "dt": 165000,
            "h": {
                "br": 320002,
                "fid": 0,
                "size": 6602754,
                "vd": -83207
            },
            "m": {
                "br": 192002,
                "fid": 0,
                "size": 3961670,
                "vd": -80721
            },
            "l": {
                "br": 128002,
                "fid": 0,
                "size": 2641128,
                "vd": -79118
            },
            "sq": {
                "br": 1798622,
                "fid": 0,
                "size": 37096591,
                "vd": -83393
            },
            "hr": null,
            "a": null,
            "cd": "01",
            "no": 1,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 1,
            "s_id": 0,
            "mark": 270464,
            "originCoverType": 0,
            "originSongSimpleData": null,
            "tagPicList": null,
            "resourceState": true,
            "version": 9,
            "songJumpInfo": null,
            "entertainmentTags": null,
            "single": 0,
            "noCopyrightRcmd": null,
            "alg": "alg_featured",
            "rtype": 0,
            "rurl": null,
            "mst": 9,
            "cp": 743010,
            "mv": 0,
            "publishTime": 1612454400000
        },
        {
            "name": "Cosa Nostra",
            "id": 1807948736,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 13703846,
                    "name": "Chester Young",
                    "tns": [],
                    "alias": []
                },
                {
                    "id": 33880776,
                    "name": "Mayone",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [],
            "pop": 50,
            "st": 0,
            "rt": "",
            "fee": 8,
            "v": 9,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 120976430,
                "name": "Cosa Nostra",
                "picUrl": "http://p3.music.126.net/Ne9BuqXK3hAWPOzLcLI0Xw==/109951166183782160.jpg",
                "tns": [],
                "pic_str": "109951166183782160",
                "pic": 109951166183782160
            },
            "dt": 199200,
            "h": {
                "br": 320000,
                "fid": 0,
                "size": 7970525,
                "vd": -89376
            },
            "m": {
                "br": 192000,
                "fid": 0,
                "size": 4782333,
                "vd": -86862
            },
            "l": {
                "br": 128000,
                "fid": 0,
                "size": 3188236,
                "vd": -85334
            },
            "sq": {
                "br": 1764561,
                "fid": 0,
                "size": 43937577,
                "vd": -89450
            },
            "hr": null,
            "a": null,
            "cd": "01",
            "no": 1,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 1,
            "s_id": 0,
            "mark": 270464,
            "originCoverType": 0,
            "originSongSimpleData": null,
            "tagPicList": null,
            "resourceState": true,
            "version": 9,
            "songJumpInfo": null,
            "entertainmentTags": null,
            "single": 0,
            "noCopyrightRcmd": null,
            "alg": "alg_featured",
            "rtype": 0,
            "rurl": null,
            "mst": 9,
            "cp": 743010,
            "mv": 0,
            "publishTime": 1611244800000
        },
        {
            "name": "Motorsport",
            "id": 1490543767,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 351402,
                    "name": "Blinders",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [],
            "pop": 55,
            "st": 0,
            "rt": "",
            "fee": 8,
            "v": 3,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 97452719,
                "name": "Motorsport",
                "picUrl": "http://p4.music.126.net/aASaqqtEb2gzymQee5iTTw==/109951165423509093.jpg",
                "tns": [],
                "pic_str": "109951165423509093",
                "pic": 109951165423509090
            },
            "dt": 199020,
            "h": {
                "br": 320002,
                "fid": 0,
                "size": 7963211,
                "vd": -88005
            },
            "m": {
                "br": 192002,
                "fid": 0,
                "size": 4777944,
                "vd": -85592
            },
            "l": {
                "br": 128002,
                "fid": 0,
                "size": 3185311,
                "vd": -84325
            },
            "sq": null,
            "hr": null,
            "a": null,
            "cd": "01",
            "no": 1,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 1,
            "s_id": 0,
            "mark": 401536,
            "originCoverType": 0,
            "originSongSimpleData": null,
            "tagPicList": null,
            "resourceState": true,
            "version": 3,
            "songJumpInfo": null,
            "entertainmentTags": null,
            "single": 0,
            "noCopyrightRcmd": null,
            "alg": "alg_featured",
            "rtype": 0,
            "rurl": null,
            "mst": 9,
            "cp": 743010,
            "mv": 0,
            "publishTime": 1605024000000
        },
        {
            "name": "Pain",
            "id": 1489044599,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 32906516,
                    "name": "Max Brhon",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [],
            "pop": 85,
            "st": 0,
            "rt": "",
            "fee": 8,
            "v": 4,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 97183036,
                "name": "Pain",
                "picUrl": "http://p4.music.126.net/fMTY8WiocW9w2tiAOacJWA==/109951165406789453.jpg",
                "tns": [],
                "pic_str": "109951165406789453",
                "pic": 109951165406789460
            },
            "dt": 224113,
            "h": {
                "br": 320002,
                "fid": 0,
                "size": 8967358,
                "vd": -56935
            },
            "m": {
                "br": 192002,
                "fid": 0,
                "size": 5380432,
                "vd": -54620
            },
            "l": {
                "br": 128002,
                "fid": 0,
                "size": 3586969,
                "vd": -53534
            },
            "sq": null,
            "hr": null,
            "a": null,
            "cd": "01",
            "no": 1,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 1,
            "s_id": 0,
            "mark": 401536,
            "originCoverType": 0,
            "originSongSimpleData": null,
            "tagPicList": null,
            "resourceState": true,
            "version": 4,
            "songJumpInfo": null,
            "entertainmentTags": null,
            "single": 0,
            "noCopyrightRcmd": null,
            "alg": "alg_featured",
            "rtype": 0,
            "rurl": null,
            "mst": 9,
            "cp": 743010,
            "mv": 0,
            "publishTime": 1604332800000
        },
        {
            "name": "Take It Down",
            "id": 1480338770,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 32779370,
                    "name": "Facading",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [],
            "pop": 90,
            "st": 0,
            "rt": "",
            "fee": 8,
            "v": 3,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 95621602,
                "name": "Take It Down",
                "picUrl": "http://p3.music.126.net/U2SwaGnoXc5KYDplAB3yjw==/109951165325504807.jpg",
                "tns": [],
                "pic_str": "109951165325504807",
                "pic": 109951165325504800
            },
            "dt": 177142,
            "h": {
                "br": 320000,
                "fid": 0,
                "size": 7088631,
                "vd": -61051
            },
            "m": {
                "br": 192000,
                "fid": 0,
                "size": 4253196,
                "vd": -58547
            },
            "l": {
                "br": 128000,
                "fid": 0,
                "size": 2835479,
                "vd": -57165
            },
            "sq": null,
            "hr": null,
            "a": null,
            "cd": "01",
            "no": 1,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 1,
            "s_id": 0,
            "mark": 270464,
            "originCoverType": 0,
            "originSongSimpleData": null,
            "tagPicList": null,
            "resourceState": true,
            "version": 3,
            "songJumpInfo": null,
            "entertainmentTags": null,
            "single": 0,
            "noCopyrightRcmd": null,
            "alg": "alg_featured",
            "rtype": 0,
            "rurl": null,
            "mst": 9,
            "cp": 743010,
            "mv": 0,
            "publishTime": 1602691200000
        },
        {
            "name": "You",
            "id": 1459181992,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 30568642,
                    "name": "Lucii",
                    "tns": [],
                    "alias": []
                },
                {
                    "id": 12047034,
                    "name": "Sam Lamar",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [],
            "pop": 25,
            "st": 0,
            "rt": "",
            "fee": 8,
            "v": 8,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 91740837,
                "name": "You",
                "picUrl": "http://p3.music.126.net/BpkCIbUidH4IYBQpPNjzEw==/109951166425209724.jpg",
                "tns": [],
                "pic_str": "109951166425209724",
                "pic": 109951166425209730
            },
            "dt": 249765,
            "h": {
                "br": 320000,
                "fid": 0,
                "size": 9993448,
                "vd": -74031
            },
            "m": {
                "br": 192000,
                "fid": 0,
                "size": 5996086,
                "vd": -71492
            },
            "l": {
                "br": 128000,
                "fid": 0,
                "size": 3997405,
                "vd": -69255
            },
            "sq": {
                "br": 1133915,
                "fid": 0,
                "size": 35401644,
                "vd": -74169
            },
            "hr": null,
            "a": null,
            "cd": "01",
            "no": 1,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 1,
            "s_id": 0,
            "mark": 270464,
            "originCoverType": 0,
            "originSongSimpleData": null,
            "tagPicList": null,
            "resourceState": true,
            "version": 8,
            "songJumpInfo": null,
            "entertainmentTags": null,
            "single": 0,
            "noCopyrightRcmd": null,
            "alg": "alg_featured",
            "rtype": 0,
            "rurl": null,
            "mst": 9,
            "cp": 1416512,
            "mv": 0,
            "publishTime": 1594915200000
        }
    ]
}
 */
/**
 * {
    "playlist": {
        "id": 5284878865,
        "name": "[Glitch Hop] 毛刺脉冲",
        "coverImgId": 109951165904906560,
        "coverImgUrl": "https://p1.music.126.net/Cq8NR8UTHkMeezBr2VD46A==/109951165904906560.jpg",
        "coverImgId_str": "109951165904906560",
        "adType": 0,
        "userId": 1589393,
        "createTime": 1602467891354,
        "status": 0,
        "opRecommend": false,
        "highQuality": false,
        "newImported": false,
        "updateTime": 1632385148868,
        "trackCount": 40,
        "specialType": 100,
        "privacy": 0,
        "trackUpdateTime": 1655736221970,
        "commentThreadId": "A_PL_0_5284878865",
        "playCount": 1070255,
        "trackNumberUpdateTime": 1653558117528,
        "subscribedCount": 6766,
        "cloudTrackCount": 0,
        "ordered": true,
        "description": "Glitch Hop可以说是流行化，舞曲化的Glitch Music（毛刺音乐），它是Hip Hop元素和Glitch元素（比如光盘跳针，黑胶唱片刮盘声，电路弯曲，和其他类似噪声失真的声音）结合的产物，和早期Dubstep的发展有点类似，因此也更被听众所接受。\n\n",
        "tags": [
            "电子"
        ],
        "updateFrequency": "不定期更新",
        "backgroundCoverId": 109951165904893970,
        "backgroundCoverUrl": "https://p1.music.126.net/AID7ino2Z1seY74BoQ9ZEw==/109951165904893967.jpg",
        "titleImage": 109951165904896450,
        "titleImageUrl": "https://p1.music.126.net/js01kdwpYsTvQxW8D7ND_g==/109951165904896442.jpg",
        "englishTitle": "Glitch Hop",
        "officialPlaylistType": "OP",
        "subscribers": [
            {
                "defaultAvatar": false,
                "province": 330000,
                "authStatus": 0,
                "followed": false,
                "avatarUrl": "http://p1.music.126.net/JhI_Iq-uI63z69WbGgUAsQ==/18517974836504188.jpg",
                "accountStatus": 0,
                "gender": 0,
                "city": 330100,
                "birthday": 0,
                "userId": 367066264,
                "userType": 0,
                "nickname": "freedom666_",
                "signature": "",
                "description": "",
                "detailDescription": "",
                "avatarImgId": 18517974836504188,
                "backgroundImgId": 109951165547156740,
                "backgroundUrl": "http://p1.music.126.net/GPirQcwqn3QdzH8C4_E5UA==/109951165547156741.jpg",
                "authority": 0,
                "mutual": false,
                "expertTags": null,
                "experts": null,
                "djStatus": 0,
                "vipType": 11,
                "remarkName": null,
                "authenticationTypes": 0,
                "avatarDetail": null,
                "avatarImgIdStr": "18517974836504188",
                "backgroundImgIdStr": "109951165547156741",
                "anchor": false,
                "avatarImgId_str": "18517974836504188"
            },
            {
                "defaultAvatar": false,
                "province": 370000,
                "authStatus": 0,
                "followed": false,
                "avatarUrl": "http://p1.music.126.net/wxQ_QXdI5brOV7S6Z-rERA==/109951165407903618.jpg",
                "accountStatus": 0,
                "gender": 1,
                "city": 371200,
                "birthday": 0,
                "userId": 89095392,
                "userType": 0,
                "nickname": "中涂",
                "signature": "",
                "description": "",
                "detailDescription": "",
                "avatarImgId": 109951165407903620,
                "backgroundImgId": 109951166282041730,
                "backgroundUrl": "http://p1.music.126.net/NK9pb7wR9AM8fw3xbXWUdw==/109951166282041720.jpg",
                "authority": 0,
                "mutual": false,
                "expertTags": null,
                "experts": null,
                "djStatus": 0,
                "vipType": 11,
                "remarkName": null,
                "authenticationTypes": 0,
                "avatarDetail": null,
                "avatarImgIdStr": "109951165407903618",
                "backgroundImgIdStr": "109951166282041720",
                "anchor": false,
                "avatarImgId_str": "109951165407903618"
            },
            {
                "defaultAvatar": false,
                "province": 350000,
                "authStatus": 0,
                "followed": false,
                "avatarUrl": "http://p1.music.126.net/LyFJvOUW7rOnTEJ7l3shqw==/109951164650665274.jpg",
                "accountStatus": 0,
                "gender": 0,
                "city": 350500,
                "birthday": 0,
                "userId": 1353229193,
                "userType": 0,
                "nickname": "过客看客_",
                "signature": "",
                "description": "",
                "detailDescription": "",
                "avatarImgId": 109951164650665280,
                "backgroundImgId": 109951162868128400,
                "backgroundUrl": "http://p1.music.126.net/2zSNIqTcpHL2jIvU6hG0EA==/109951162868128395.jpg",
                "authority": 0,
                "mutual": false,
                "expertTags": null,
                "experts": null,
                "djStatus": 0,
                "vipType": 0,
                "remarkName": null,
                "authenticationTypes": 0,
                "avatarDetail": null,
                "avatarImgIdStr": "109951164650665274",
                "backgroundImgIdStr": "109951162868128395",
                "anchor": false,
                "avatarImgId_str": "109951164650665274"
            },
            {
                "defaultAvatar": false,
                "province": 430000,
                "authStatus": 0,
                "followed": false,
                "avatarUrl": "http://p1.music.126.net/SUeqMM8HOIpHv9Nhl9qt9w==/109951165647004069.jpg",
                "accountStatus": 0,
                "gender": 2,
                "city": 430100,
                "birthday": 0,
                "userId": 3953097151,
                "userType": 0,
                "nickname": "舟六2010",
                "signature": "",
                "description": "",
                "detailDescription": "",
                "avatarImgId": 109951165647004060,
                "backgroundImgId": 109951162868126480,
                "backgroundUrl": "http://p1.music.126.net/_f8R60U9mZ42sSNvdPn2sQ==/109951162868126486.jpg",
                "authority": 0,
                "mutual": false,
                "expertTags": null,
                "experts": null,
                "djStatus": 0,
                "vipType": 0,
                "remarkName": null,
                "authenticationTypes": 0,
                "avatarDetail": null,
                "avatarImgIdStr": "109951165647004069",
                "backgroundImgIdStr": "109951162868126486",
                "anchor": false,
                "avatarImgId_str": "109951165647004069"
            },
            {
                "defaultAvatar": false,
                "province": 610000,
                "authStatus": 0,
                "followed": false,
                "avatarUrl": "http://p1.music.126.net/x9GyO4p7jNXl6hBz59HL2w==/109951164612530075.jpg",
                "accountStatus": 0,
                "gender": 2,
                "city": 610100,
                "birthday": 0,
                "userId": 503547570,
                "userType": 0,
                "nickname": "淹留1706",
                "signature": "",
                "description": "",
                "detailDescription": "",
                "avatarImgId": 109951164612530080,
                "backgroundImgId": 109951164330875980,
                "backgroundUrl": "http://p1.music.126.net/i6peSRspRODkKtx_v4MgSg==/109951164330875981.jpg",
                "authority": 0,
                "mutual": false,
                "expertTags": null,
                "experts": null,
                "djStatus": 0,
                "vipType": 11,
                "remarkName": null,
                "authenticationTypes": 0,
                "avatarDetail": null,
                "avatarImgIdStr": "109951164612530075",
                "backgroundImgIdStr": "109951164330875981",
                "anchor": false,
                "avatarImgId_str": "109951164612530075"
            },
            {
                "defaultAvatar": false,
                "province": 350000,
                "authStatus": 0,
                "followed": false,
                "avatarUrl": "http://p1.music.126.net/iqwU13_BUWzHPhsABsOSOA==/109951162790923087.jpg",
                "accountStatus": 0,
                "gender": 0,
                "city": 350300,
                "birthday": 0,
                "userId": 306848172,
                "userType": 0,
                "nickname": "哈哈赛",
                "signature": "",
                "description": "",
                "detailDescription": "",
                "avatarImgId": 109951162790923090,
                "backgroundImgId": 109951162801865170,
                "backgroundUrl": "http://p1.music.126.net/cqdXrcs5Mesy09yP7AY02g==/109951162801865167.jpg",
                "authority": 0,
                "mutual": false,
                "expertTags": null,
                "experts": null,
                "djStatus": 0,
                "vipType": 11,
                "remarkName": null,
                "authenticationTypes": 0,
                "avatarDetail": null,
                "avatarImgIdStr": "109951162790923087",
                "backgroundImgIdStr": "109951162801865167",
                "anchor": false,
                "avatarImgId_str": "109951162790923087"
            },
            {
                "defaultAvatar": false,
                "province": 420000,
                "authStatus": 0,
                "followed": false,
                "avatarUrl": "http://p1.music.126.net/jzIAJaEfYyBXXPYoBXV_IQ==/109951166467805909.jpg",
                "accountStatus": 0,
                "gender": 1,
                "city": 420600,
                "birthday": 0,
                "userId": 1887628554,
                "userType": 0,
                "nickname": "清風明興",
                "signature": "",
                "description": "",
                "detailDescription": "",
                "avatarImgId": 109951166467805900,
                "backgroundImgId": 109951165088319970,
                "backgroundUrl": "http://p1.music.126.net/B2gBukauudqvgL3u9S9qeA==/109951165088319972.jpg",
                "authority": 0,
                "mutual": false,
                "expertTags": null,
                "experts": null,
                "djStatus": 0,
                "vipType": 0,
                "remarkName": null,
                "authenticationTypes": 0,
                "avatarDetail": null,
                "avatarImgIdStr": "109951166467805909",
                "backgroundImgIdStr": "109951165088319972",
                "anchor": false,
                "avatarImgId_str": "109951166467805909"
            },
            {
                "defaultAvatar": false,
                "province": 330000,
                "authStatus": 0,
                "followed": false,
                "avatarUrl": "http://p1.music.126.net/14wnhJeFNOZn2Q0d8ZEwZQ==/3261151501899946.jpg",
                "accountStatus": 0,
                "gender": 1,
                "city": 330200,
                "birthday": 0,
                "userId": 758748,
                "userType": 0,
                "nickname": "Bing-超級VIP專屬",
                "signature": "你若盛开，清风自来!!",
                "description": "",
                "detailDescription": "",
                "avatarImgId": 3261151501899946,
                "backgroundImgId": 1426066581868989,
                "backgroundUrl": "http://p1.music.126.net/mOBTxAX8EtuAISTUXBd2ug==/1426066581868989.jpg",
                "authority": 0,
                "mutual": false,
                "expertTags": null,
                "experts": null,
                "djStatus": 0,
                "vipType": 11,
                "remarkName": null,
                "authenticationTypes": 0,
                "avatarDetail": null,
                "avatarImgIdStr": "3261151501899946",
                "backgroundImgIdStr": "1426066581868989",
                "anchor": false
            }
        ],
        "subscribed": null,
        "creator": {
            "defaultAvatar": false,
            "province": 1000000,
            "authStatus": 1,
            "followed": false,
            "avatarUrl": "http://p1.music.126.net/urImwyWOQCKqa01LUm8IgQ==/109951166469300969.jpg",
            "accountStatus": 0,
            "gender": 0,
            "city": 1003000,
            "birthday": 0,
            "userId": 1589393,
            "userType": 10,
            "nickname": "云音乐电音专区",
            "signature": "",
            "description": "云村电音专区操盘手",
            "detailDescription": "云村电音专区操盘手",
            "avatarImgId": 109951166469300980,
            "backgroundImgId": 109951165451687800,
            "backgroundUrl": "http://p1.music.126.net/LAYh6ivtFBTJ2Y8Zo3iWig==/109951165451687804.jpg",
            "authority": 0,
            "mutual": false,
            "expertTags": [
                "电子"
            ],
            "experts": null,
            "djStatus": 0,
            "vipType": 0,
            "remarkName": null,
            "authenticationTypes": 526400,
            "avatarDetail": {
                "userType": 10,
                "identityLevel": 1,
                "identityIconUrl": "https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4788940880/1a1f/68f5/b59a/b444b81b88567108ba88194fa29144f5.png"
            },
            "avatarImgIdStr": "109951166469300969",
            "backgroundImgIdStr": "109951165451687804",
            "anchor": false,
            "avatarImgId_str": "109951166469300969"
        },
        "tracks": [
            {
                "name": "CYBER",
                "id": 1939738265,
                "pst": 0,
                "t": 0,
                "ar": [
                    {
                        "id": 33858251,
                        "name": "Callson",
                        "tns": [],
                        "alias": []
                    },
                    {
                        "id": 34240773,
                        "name": "AstroWilk",
                        "tns": [],
                        "alias": []
                    }
                ],
                "alia": [],
                "pop": 60,
                "st": 0,
                "rt": "",
                "fee": 8,
                "v": 3,
                "crbt": null,
                "cf": "",
                "al": {
                    "id": 143714369,
                    "name": "CYBER",
                    "picUrl": "http://p4.music.126.net/6ahBazYMFwM5-ZyDj2WUPw==/109951167316904779.jpg",
                    "tns": [],
                    "pic_str": "109951167316904779",
                    "pic": 109951167316904780
                },
                "dt": 163200,
                "h": {
                    "br": 320000,
                    "fid": 0,
                    "size": 6530656,
                    "vd": -42186
                },
                "m": {
                    "br": 192000,
                    "fid": 0,
                    "size": 3918411,
                    "vd": -39660
                },
                "l": {
                    "br": 128000,
                    "fid": 0,
                    "size": 2612288,
                    "vd": -38150
                },
                "sq": null,
                "hr": null,
                "a": null,
                "cd": "01",
                "no": 1,
                "rtUrl": null,
                "ftype": 0,
                "rtUrls": [],
                "djId": 0,
                "copyright": 1,
                "s_id": 0,
                "mark": 401536,
                "originCoverType": 0,
                "originSongSimpleData": null,
                "tagPicList": null,
                "resourceState": true,
                "version": 3,
                "songJumpInfo": null,
                "entertainmentTags": null,
                "single": 0,
                "noCopyrightRcmd": null,
                "alg": "alg_featured",
                "rtype": 0,
                "rurl": null,
                "mst": 9,
                "cp": 743010,
                "mv": 0,
                "publishTime": 1652976000000
            },
            {
                "name": "Villain",
                "id": 1925491183,
                "pst": 0,
                "t": 0,
                "ar": [
                    {
                        "id": 1147135,
                        "name": "Drezo",
                        "tns": [],
                        "alias": []
                    },
                    {
                        "id": 212055,
                        "name": "Dread MC",
                        "tns": [],
                        "alias": []
                    }
                ],
                "alia": [],
                "pop": 55,
                "st": 0,
                "rt": "",
                "fee": 8,
                "v": 3,
                "crbt": null,
                "cf": "",
                "al": {
                    "id": 141330804,
                    "name": "Villain",
                    "picUrl": "http://p3.music.126.net/ldmX09bQ-nwSDM7rL6dMsg==/109951167116031162.jpg",
                    "tns": [],
                    "pic_str": "109951167116031162",
                    "pic": 109951167116031170
                },
                "dt": 294193,
                "h": {
                    "br": 320000,
                    "fid": 0,
                    "size": 11770819,
                    "vd": -73481
                },
                "m": {
                    "br": 192000,
                    "fid": 0,
                    "size": 7062509,
                    "vd": -71013
                },
                "l": {
                    "br": 128000,
                    "fid": 0,
                    "size": 4708354,
                    "vd": -69564
                },
                "sq": null,
                "hr": null,
                "a": null,
                "cd": "01",
                "no": 1,
                "rtUrl": null,
                "ftype": 0,
                "rtUrls": [],
                "djId": 0,
                "copyright": 1,
                "s_id": 0,
                "mark": 1319040,
                "originCoverType": 0,
                "originSongSimpleData": null,
                "tagPicList": null,
                "resourceState": true,
                "version": 3,
                "songJumpInfo": null,
                "entertainmentTags": null,
                "single": 0,
                "noCopyrightRcmd": null,
                "alg": "alg_featured",
                "rtype": 0,
                "rurl": null,
                "mst": 9,
                "cp": 743010,
                "mv": 0,
                "publishTime": 1646928000000
            },
            {
                "name": "Puzzle Box",
                "id": 1925321794,
                "pst": 0,
                "t": 0,
                "ar": [
                    {
                        "id": 1019466,
                        "name": "Rezz",
                        "tns": [],
                        "alias": []
                    },
                    {
                        "id": 749030,
                        "name": "Subtronics",
                        "tns": [],
                        "alias": []
                    }
                ],
                "alia": [],
                "pop": 85,
                "st": 0,
                "rt": "",
                "fee": 8,
                "v": 2,
                "crbt": null,
                "cf": "",
                "al": {
                    "id": 141309992,
                    "name": "Puzzle Box",
                    "picUrl": "http://p4.music.126.net/99u2KE7P41YbfJYKN_-vHQ==/109951167114061761.jpg",
                    "tns": [],
                    "pic_str": "109951167114061761",
                    "pic": 109951167114061760
                },
                "dt": 212244,
                "h": {
                    "br": 320000,
                    "fid": 0,
                    "size": 8490885,
                    "vd": -55010
                },
                "m": {
                    "br": 192000,
                    "fid": 0,
                    "size": 5094548,
                    "vd": -52424
                },
                "l": {
                    "br": 128000,
                    "fid": 0,
                    "size": 3396380,
                    "vd": -50799
                },
                "sq": null,
                "hr": null,
                "a": null,
                "cd": "01",
                "no": 1,
                "rtUrl": null,
                "ftype": 0,
                "rtUrls": [],
                "djId": 0,
                "copyright": 1,
                "s_id": 0,
                "mark": 270336,
                "originCoverType": 0,
                "originSongSimpleData": null,
                "tagPicList": null,
                "resourceState": true,
                "version": 2,
                "songJumpInfo": null,
                "entertainmentTags": null,
                "single": 0,
                "noCopyrightRcmd": null,
                "alg": "alg_featured",
                "rtype": 0,
                "rurl": null,
                "mst": 9,
                "cp": 7003,
                "mv": 0,
                "publishTime": 1646323200000
            },
            {
                "name": "Act Like You Know",
                "id": 1891372914,
                "pst": 0,
                "t": 0,
                "ar": [
                    {
                        "id": 37751,
                        "name": "Krafty Kuts",
                        "tns": [],
                        "alias": []
                    }
                ],
                "alia": [],
                "pop": 45,
                "st": 0,
                "rt": "",
                "fee": 8,
                "v": 6,
                "crbt": null,
                "cf": "",
                "al": {
                    "id": 135507699,
                    "name": "Act Like You Know",
                    "picUrl": "http://p3.music.126.net/4YT_eyE665OApxrgIk7n6A==/109951166577075766.jpg",
                    "tns": [],
                    "pic_str": "109951166577075766",
                    "pic": 109951166577075760
                },
                "dt": 246857,
                "h": {
                    "br": 320000,
                    "fid": 0,
                    "size": 9876419,
                    "vd": -91763
                },
                "m": {
                    "br": 192000,
                    "fid": 0,
                    "size": 5925869,
                    "vd": -89262
                },
                "l": {
                    "br": 128000,
                    "fid": 0,
                    "size": 3950594,
                    "vd": -87776
                },
                "sq": {
                    "br": 1768359,
                    "fid": 0,
                    "size": 54566522,
                    "vd": -91825
                },
                "hr": null,
                "a": null,
                "cd": "01",
                "no": 1,
                "rtUrl": null,
                "ftype": 0,
                "rtUrls": [],
                "djId": 0,
                "copyright": 1,
                "s_id": 0,
                "mark": 270336,
                "originCoverType": 0,
                "originSongSimpleData": null,
                "tagPicList": null,
                "resourceState": true,
                "version": 6,
                "songJumpInfo": null,
                "entertainmentTags": null,
                "single": 0,
                "noCopyrightRcmd": null,
                "alg": "alg_featured",
                "rtype": 0,
                "rurl": null,
                "mst": 9,
                "cp": 1416200,
                "mv": 0,
                "publishTime": 1637164800000
            },
            {
                "name": "Under My Skin",
                "id": 1809764463,
                "pst": 0,
                "t": 0,
                "ar": [
                    {
                        "id": 31677820,
                        "name": "Fox Angelous",
                        "tns": [],
                        "alias": []
                    }
                ],
                "alia": [],
                "pop": 80,
                "st": 0,
                "rt": "",
                "fee": 8,
                "v": 9,
                "crbt": null,
                "cf": "",
                "al": {
                    "id": 121247555,
                    "name": "Under My Skin",
                    "picUrl": "http://p3.music.126.net/rv84vglc4hTcNwhkB1h-4Q==/109951166183779873.jpg",
                    "tns": [],
                    "pic_str": "109951166183779873",
                    "pic": 109951166183779870
                },
                "dt": 165000,
                "h": {
                    "br": 320002,
                    "fid": 0,
                    "size": 6602754,
                    "vd": -83207
                },
                "m": {
                    "br": 192002,
                    "fid": 0,
                    "size": 3961670,
                    "vd": -80721
                },
                "l": {
                    "br": 128002,
                    "fid": 0,
                    "size": 2641128,
                    "vd": -79118
                },
                "sq": {
                    "br": 1798622,
                    "fid": 0,
                    "size": 37096591,
                    "vd": -83393
                },
                "hr": null,
                "a": null,
                "cd": "01",
                "no": 1,
                "rtUrl": null,
                "ftype": 0,
                "rtUrls": [],
                "djId": 0,
                "copyright": 1,
                "s_id": 0,
                "mark": 270464,
                "originCoverType": 0,
                "originSongSimpleData": null,
                "tagPicList": null,
                "resourceState": true,
                "version": 9,
                "songJumpInfo": null,
                "entertainmentTags": null,
                "single": 0,
                "noCopyrightRcmd": null,
                "alg": "alg_featured",
                "rtype": 0,
                "rurl": null,
                "mst": 9,
                "cp": 743010,
                "mv": 0,
                "publishTime": 1612454400000
            },
            {
                "name": "Cosa Nostra",
                "id": 1807948736,
                "pst": 0,
                "t": 0,
                "ar": [
                    {
                        "id": 13703846,
                        "name": "Chester Young",
                        "tns": [],
                        "alias": []
                    },
                    {
                        "id": 33880776,
                        "name": "Mayone",
                        "tns": [],
                        "alias": []
                    }
                ],
                "alia": [],
                "pop": 50,
                "st": 0,
                "rt": "",
                "fee": 8,
                "v": 9,
                "crbt": null,
                "cf": "",
                "al": {
                    "id": 120976430,
                    "name": "Cosa Nostra",
                    "picUrl": "http://p3.music.126.net/Ne9BuqXK3hAWPOzLcLI0Xw==/109951166183782160.jpg",
                    "tns": [],
                    "pic_str": "109951166183782160",
                    "pic": 109951166183782160
                },
                "dt": 199200,
                "h": {
                    "br": 320000,
                    "fid": 0,
                    "size": 7970525,
                    "vd": -89376
                },
                "m": {
                    "br": 192000,
                    "fid": 0,
                    "size": 4782333,
                    "vd": -86862
                },
                "l": {
                    "br": 128000,
                    "fid": 0,
                    "size": 3188236,
                    "vd": -85334
                },
                "sq": {
                    "br": 1764561,
                    "fid": 0,
                    "size": 43937577,
                    "vd": -89450
                },
                "hr": null,
                "a": null,
                "cd": "01",
                "no": 1,
                "rtUrl": null,
                "ftype": 0,
                "rtUrls": [],
                "djId": 0,
                "copyright": 1,
                "s_id": 0,
                "mark": 270464,
                "originCoverType": 0,
                "originSongSimpleData": null,
                "tagPicList": null,
                "resourceState": true,
                "version": 9,
                "songJumpInfo": null,
                "entertainmentTags": null,
                "single": 0,
                "noCopyrightRcmd": null,
                "alg": "alg_featured",
                "rtype": 0,
                "rurl": null,
                "mst": 9,
                "cp": 743010,
                "mv": 0,
                "publishTime": 1611244800000
            },
            {
                "name": "Motorsport",
                "id": 1490543767,
                "pst": 0,
                "t": 0,
                "ar": [
                    {
                        "id": 351402,
                        "name": "Blinders",
                        "tns": [],
                        "alias": []
                    }
                ],
                "alia": [],
                "pop": 55,
                "st": 0,
                "rt": "",
                "fee": 8,
                "v": 3,
                "crbt": null,
                "cf": "",
                "al": {
                    "id": 97452719,
                    "name": "Motorsport",
                    "picUrl": "http://p4.music.126.net/aASaqqtEb2gzymQee5iTTw==/109951165423509093.jpg",
                    "tns": [],
                    "pic_str": "109951165423509093",
                    "pic": 109951165423509090
                },
                "dt": 199020,
                "h": {
                    "br": 320002,
                    "fid": 0,
                    "size": 7963211,
                    "vd": -88005
                },
                "m": {
                    "br": 192002,
                    "fid": 0,
                    "size": 4777944,
                    "vd": -85592
                },
                "l": {
                    "br": 128002,
                    "fid": 0,
                    "size": 3185311,
                    "vd": -84325
                },
                "sq": null,
                "hr": null,
                "a": null,
                "cd": "01",
                "no": 1,
                "rtUrl": null,
                "ftype": 0,
                "rtUrls": [],
                "djId": 0,
                "copyright": 1,
                "s_id": 0,
                "mark": 401536,
                "originCoverType": 0,
                "originSongSimpleData": null,
                "tagPicList": null,
                "resourceState": true,
                "version": 3,
                "songJumpInfo": null,
                "entertainmentTags": null,
                "single": 0,
                "noCopyrightRcmd": null,
                "alg": "alg_featured",
                "rtype": 0,
                "rurl": null,
                "mst": 9,
                "cp": 743010,
                "mv": 0,
                "publishTime": 1605024000000
            },
            {
                "name": "Pain",
                "id": 1489044599,
                "pst": 0,
                "t": 0,
                "ar": [
                    {
                        "id": 32906516,
                        "name": "Max Brhon",
                        "tns": [],
                        "alias": []
                    }
                ],
                "alia": [],
                "pop": 85,
                "st": 0,
                "rt": "",
                "fee": 8,
                "v": 4,
                "crbt": null,
                "cf": "",
                "al": {
                    "id": 97183036,
                    "name": "Pain",
                    "picUrl": "http://p4.music.126.net/fMTY8WiocW9w2tiAOacJWA==/109951165406789453.jpg",
                    "tns": [],
                    "pic_str": "109951165406789453",
                    "pic": 109951165406789460
                },
                "dt": 224113,
                "h": {
                    "br": 320002,
                    "fid": 0,
                    "size": 8967358,
                    "vd": -56935
                },
                "m": {
                    "br": 192002,
                    "fid": 0,
                    "size": 5380432,
                    "vd": -54620
                },
                "l": {
                    "br": 128002,
                    "fid": 0,
                    "size": 3586969,
                    "vd": -53534
                },
                "sq": null,
                "hr": null,
                "a": null,
                "cd": "01",
                "no": 1,
                "rtUrl": null,
                "ftype": 0,
                "rtUrls": [],
                "djId": 0,
                "copyright": 1,
                "s_id": 0,
                "mark": 401536,
                "originCoverType": 0,
                "originSongSimpleData": null,
                "tagPicList": null,
                "resourceState": true,
                "version": 4,
                "songJumpInfo": null,
                "entertainmentTags": null,
                "single": 0,
                "noCopyrightRcmd": null,
                "alg": "alg_featured",
                "rtype": 0,
                "rurl": null,
                "mst": 9,
                "cp": 743010,
                "mv": 0,
                "publishTime": 1604332800000
            },
            {
                "name": "Take It Down",
                "id": 1480338770,
                "pst": 0,
                "t": 0,
                "ar": [
                    {
                        "id": 32779370,
                        "name": "Facading",
                        "tns": [],
                        "alias": []
                    }
                ],
                "alia": [],
                "pop": 90,
                "st": 0,
                "rt": "",
                "fee": 8,
                "v": 3,
                "crbt": null,
                "cf": "",
                "al": {
                    "id": 95621602,
                    "name": "Take It Down",
                    "picUrl": "http://p3.music.126.net/U2SwaGnoXc5KYDplAB3yjw==/109951165325504807.jpg",
                    "tns": [],
                    "pic_str": "109951165325504807",
                    "pic": 109951165325504800
                },
                "dt": 177142,
                "h": {
                    "br": 320000,
                    "fid": 0,
                    "size": 7088631,
                    "vd": -61051
                },
                "m": {
                    "br": 192000,
                    "fid": 0,
                    "size": 4253196,
                    "vd": -58547
                },
                "l": {
                    "br": 128000,
                    "fid": 0,
                    "size": 2835479,
                    "vd": -57165
                },
                "sq": null,
                "hr": null,
                "a": null,
                "cd": "01",
                "no": 1,
                "rtUrl": null,
                "ftype": 0,
                "rtUrls": [],
                "djId": 0,
                "copyright": 1,
                "s_id": 0,
                "mark": 270464,
                "originCoverType": 0,
                "originSongSimpleData": null,
                "tagPicList": null,
                "resourceState": true,
                "version": 3,
                "songJumpInfo": null,
                "entertainmentTags": null,
                "single": 0,
                "noCopyrightRcmd": null,
                "alg": "alg_featured",
                "rtype": 0,
                "rurl": null,
                "mst": 9,
                "cp": 743010,
                "mv": 0,
                "publishTime": 1602691200000
            },
            {
                "name": "You",
                "id": 1459181992,
                "pst": 0,
                "t": 0,
                "ar": [
                    {
                        "id": 30568642,
                        "name": "Lucii",
                        "tns": [],
                        "alias": []
                    },
                    {
                        "id": 12047034,
                        "name": "Sam Lamar",
                        "tns": [],
                        "alias": []
                    }
                ],
                "alia": [],
                "pop": 25,
                "st": 0,
                "rt": "",
                "fee": 8,
                "v": 8,
                "crbt": null,
                "cf": "",
                "al": {
                    "id": 91740837,
                    "name": "You",
                    "picUrl": "http://p3.music.126.net/BpkCIbUidH4IYBQpPNjzEw==/109951166425209724.jpg",
                    "tns": [],
                    "pic_str": "109951166425209724",
                    "pic": 109951166425209730
                },
                "dt": 249765,
                "h": {
                    "br": 320000,
                    "fid": 0,
                    "size": 9993448,
                    "vd": -74031
                },
                "m": {
                    "br": 192000,
                    "fid": 0,
                    "size": 5996086,
                    "vd": -71492
                },
                "l": {
                    "br": 128000,
                    "fid": 0,
                    "size": 3997405,
                    "vd": -69255
                },
                "sq": {
                    "br": 1133915,
                    "fid": 0,
                    "size": 35401644,
                    "vd": -74169
                },
                "hr": null,
                "a": null,
                "cd": "01",
                "no": 1,
                "rtUrl": null,
                "ftype": 0,
                "rtUrls": [],
                "djId": 0,
                "copyright": 1,
                "s_id": 0,
                "mark": 270464,
                "originCoverType": 0,
                "originSongSimpleData": null,
                "tagPicList": null,
                "resourceState": true,
                "version": 8,
                "songJumpInfo": null,
                "entertainmentTags": null,
                "single": 0,
                "noCopyrightRcmd": null,
                "alg": "alg_featured",
                "rtype": 0,
                "rurl": null,
                "mst": 9,
                "cp": 1416512,
                "mv": 0,
                "publishTime": 1594915200000
            }
        ],
        "videoIds": null,
        "videos": null,
        "trackIds": [
            {
                "id": 1939738265,
                "v": -10000,
                "t": 0,
                "at": 0,
                "alg": "alg_featured",
                "uid": 0,
                "rcmdReason": "",
                "sc": null
            },
            {
                "id": 1925491183,
                "v": -10000,
                "t": 0,
                "at": 0,
                "alg": "alg_featured",
                "uid": 0,
                "rcmdReason": "",
                "sc": null
            },
            {
                "id": 1925321794,
                "v": -10000,
                "t": 0,
                "at": 0,
                "alg": "alg_featured",
                "uid": 0,
                "rcmdReason": "",
                "sc": null
            },
            {
                "id": 1891372914,
                "v": -10000,
                "t": 0,
                "at": 0,
                "alg": "alg_featured",
                "uid": 0,
                "rcmdReason": "",
                "sc": null
            },
            {
                "id": 1809764463,
                "v": -10000,
                "t": 0,
                "at": 0,
                "alg": "alg_featured",
                "uid": 0,
                "rcmdReason": "",
                "sc": null
            },
            {
                "id": 1807948736,
                "v": -10000,
                "t": 0,
                "at": 0,
                "alg": "alg_featured",
                "uid": 0,
                "rcmdReason": "",
                "sc": null
            },
            {
                "id": 1490543767,
                "v": -10000,
                "t": 0,
                "at": 0,
                "alg": "alg_featured",
                "uid": 0,
                "rcmdReason": "",
                "sc": null
            },
            {
                "id": 1489044599,
                "v": -10000,
                "t": 0,
                "at": 0,
                "alg": "alg_featured",
                "uid": 0,
                "rcmdReason": "",
                "sc": null
            },
            {
                "id": 1480338770,
                "v": -10000,
                "t": 0,
                "at": 0,
                "alg": "alg_featured",
                "uid": 0,
                "rcmdReason": "",
                "sc": null
            },
            {
                "id": 1459181992,
                "v": -10000,
                "t": 0,
                "at": 0,
                "alg": "alg_featured",
                "uid": 0,
                "rcmdReason": "",
                "sc": null
            },
            {
                "id": 1344716033,
                "v": -10000,
                "t": 0,
                "at": 0,
                "alg": "alg_featured",
                "uid": 0,
                "rcmdReason": "",
                "sc": null
            },
            {
                "id": 1391365902,
                "v": -10000,
                "t": 0,
                "at": 0,
                "alg": "alg_featured",
                "uid": 0,
                "rcmdReason": "",
                "sc": null
            },
            {
                "id": 1353350043,
                "v": -10000,
                "t": 0,
                "at": 0,
                "alg": "alg_featured",
                "uid": 0,
                "rcmdReason": "",
                "sc": null
            },
            {
                "id": 1351923525,
                "v": -10000,
                "t": 0,
                "at": 0,
                "alg": "alg_featured",
                "uid": 0,
                "rcmdReason": "",
                "sc": null
            },
            {
                "id": 1356899591,
                "v": -10000,
                "t": 0,
                "at": 0,
                "alg": "alg_featured",
                "uid": 0,
                "rcmdReason": "",
                "sc": null
            },
            {
                "id": 1340740744,
                "v": -10000,
                "t": 0,
                "at": 0,
                "alg": "alg_featured",
                "uid": 0,
                "rcmdReason": "",
                "sc": null
            },
            {
                "id": 1406248758,
                "v": -10000,
                "t": 0,
                "at": 0,
                "alg": "alg_featured",
                "uid": 0,
                "rcmdReason": "",
                "sc": null
            },
            {
                "id": 1343520266,
                "v": -10000,
                "t": 0,
                "at": 0,
                "alg": "alg_featured",
                "uid": 0,
                "rcmdReason": "",
                "sc": null
            },
            {
                "id": 1375851198,
                "v": -10000,
                "t": 0,
                "at": 0,
                "alg": "alg_featured",
                "uid": 0,
                "rcmdReason": "",
                "sc": null
            },
            {
                "id": 1345122423,
                "v": -10000,
                "t": 0,
                "at": 0,
                "alg": "alg_featured",
                "uid": 0,
                "rcmdReason": "",
                "sc": null
            },
            {
                "id": 1344787193,
                "v": -10000,
                "t": 0,
                "at": 0,
                "alg": "alg_featured",
                "uid": 0,
                "rcmdReason": "",
                "sc": null
            },
            {
                "id": 862677941,
                "v": -10000,
                "t": 0,
                "at": 0,
                "alg": "alg_featured",
                "uid": 0,
                "rcmdReason": "",
                "sc": null
            },
            {
                "id": 1342052814,
                "v": -10000,
                "t": 0,
                "at": 0,
                "alg": "alg_featured",
                "uid": 0,
                "rcmdReason": "",
                "sc": null
            },
            {
                "id": 1391520163,
                "v": -10000,
                "t": 0,
                "at": 0,
                "alg": "alg_featured",
                "uid": 0,
                "rcmdReason": "",
                "sc": null
            },
            {
                "id": 1420856586,
                "v": -10000,
                "t": 0,
                "at": 0,
                "alg": "alg_featured",
                "uid": 0,
                "rcmdReason": "",
                "sc": null
            },
            {
                "id": 1341512228,
                "v": -10000,
                "t": 0,
                "at": 0,
                "alg": "alg_featured",
                "uid": 0,
                "rcmdReason": "",
                "sc": null
            },
            {
                "id": 1343581068,
                "v": -10000,
                "t": 0,
                "at": 0,
                "alg": "alg_featured",
                "uid": 0,
                "rcmdReason": "",
                "sc": null
            },
            {
                "id": 1294968223,
                "v": -10000,
                "t": 0,
                "at": 0,
                "alg": "alg_featured",
                "uid": 0,
                "rcmdReason": "",
                "sc": null
            },
            {
                "id": 1426272031,
                "v": -10000,
                "t": 0,
                "at": 0,
                "alg": "alg_featured",
                "uid": 0,
                "rcmdReason": "",
                "sc": null
            },
            {
                "id": 864581914,
                "v": -10000,
                "t": 0,
                "at": 0,
                "alg": "alg_featured",
                "uid": 0,
                "rcmdReason": "",
                "sc": null
            },
            {
                "id": 1356668966,
                "v": -10000,
                "t": 0,
                "at": 0,
                "alg": "alg_featured",
                "uid": 0,
                "rcmdReason": "",
                "sc": null
            },
            {
                "id": 1340529599,
                "v": -10000,
                "t": 0,
                "at": 0,
                "alg": "alg_featured",
                "uid": 0,
                "rcmdReason": "",
                "sc": null
            },
            {
                "id": 1318507804,
                "v": -10000,
                "t": 0,
                "at": 0,
                "alg": "alg_featured",
                "uid": 0,
                "rcmdReason": "",
                "sc": null
            },
            {
                "id": 1381414166,
                "v": -10000,
                "t": 0,
                "at": 0,
                "alg": "alg_featured",
                "uid": 0,
                "rcmdReason": "",
                "sc": null
            },
            {
                "id": 1302066341,
                "v": -10000,
                "t": 0,
                "at": 0,
                "alg": "alg_featured",
                "uid": 0,
                "rcmdReason": "",
                "sc": null
            }
        ],
        "shareCount": 111,
        "commentCount": 36,
        "remixVideo": null,
        "sharedUsers": null,
        "historySharedUsers": null
    }
}
 */

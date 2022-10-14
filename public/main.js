
getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status <= 300) {
                console.log(request.response)
                //创建标签
                const style = document.createElement('style')
                //填写内容
                style.innerHTML = request.response
                //插入内容
                document.head.appendChild(style)
                console.log('成功')
            } else {
                alert('下载css失败')
            }
        }

    }
    // request.onerror = () => {
    //     console.log('失败')
    // }
    request.send()
}

getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status <= 300) {
                console.log(request.response)
                const script = document.createElement('script')
                script.innerHTML = request.response
                document.body.appendChild(script)
                console.log('成功')
            } else {
                alert('下载js失败')
            }
        }

    }
    request.send()
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.onreadystatechange = () => {
        //下载完成,但不知道是否下载的内容正确
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status <= 300) {
                console.log(request.response)
                const div = document.createElement('div')
                div.innerHTML = request.response
                document.body.appendChild(div)
                console.log('成功')
            } else {
                alert('下载html失败')
            }

        }
    }
    request.send()
}
getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/4.xml')

    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status <= 300) {
                const dom = request.responseXML
                const text = dom.getElementsByTagName('warning')[0].textContent
                console.log(text.trim())
            }
        }
    }
    request.send()
}
getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/5.json")
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status <= 300) {
                const object = JSON.parse(request.response)
                myName.textContent = object.name
                console.log(object);
            }
        }
    }
    request.send()
}
let n = 1
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', `/page${n + 1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status <= 300) {
                console.log(request.response);
                const array = JSON.parse(request.response)
                array.forEach(item => {
                    const li = document.createElement('li')
                    li.textContent = item.id
                    xxx.appendChild(li)
                });
                n += 1
            }
        }
    }
    request.send()
}
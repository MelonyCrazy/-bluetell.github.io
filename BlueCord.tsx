import React, { useState } from 'react'
import { MessageCircle, Music, Server, CreditCard, User } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const musicList = [
  { title: "Госпожа Эвелен", artist: "Пикми" },
  { title: "Госпожа Эвелин", artist: "Можно" },
]

export default function BlueTellApp() {
  const [currentChat, setCurrentChat] = useState(null)
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [currentTrack, setCurrentTrack] = useState(null)

  const sendMessage = (e) => {
    e.preventDefault()
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sender: 'You' }])
      setNewMessage('')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-4 font-sans">
      <Card className="w-full max-w-6xl mx-auto shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <CardTitle className="text-3xl font-extrabold">BlueTell</CardTitle>
          <CardDescription className="text-blue-100">Connect, Chat, and Groove with Friends!</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <Tabs defaultValue="chat" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5 gap-4 bg-blue-50 p-2 rounded-lg">
              <TabsTrigger value="chat" className="data-[state=active]:bg-white"><MessageCircle className="mr-2" /> Chat</TabsTrigger>
              <TabsTrigger value="friends" className="data-[state=active]:bg-white"><User className="mr-2" /> Friends</TabsTrigger>
              <TabsTrigger value="servers" className="data-[state=active]:bg-white"><Server className="mr-2" /> Servers</TabsTrigger>
              <TabsTrigger value="subscription" className="data-[state=active]:bg-white"><CreditCard className="mr-2" /> Subscription</TabsTrigger>
              <TabsTrigger value="music" className="data-[state=active]:bg-white"><Music className="mr-2" /> Music</TabsTrigger>
            </TabsList>
            
            <TabsContent value="chat" className="space-y-4">
              <div className="grid grid-cols-3 gap-4 h-[600px]">
                <Card className="col-span-1 overflow-y-auto">
                  <CardHeader>
                    <CardTitle>Chats</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {['Alice', 'Bob', 'Charlie'].map((friend) => (
                      <div key={friend} className="flex items-center space-x-4 mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded" onClick={() => setCurrentChat(friend)}>
                        <Avatar>
                          <AvatarImage src={`https://i.pravatar.cc/150?u=${friend}`} alt={friend} />
                          <AvatarFallback>{friend[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="font-semibold">{friend}</h3>
                          <p className="text-sm text-gray-500">Click to chat</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                <Card className="col-span-2">
                  <CardHeader>
                    <CardTitle>{currentChat ? `Chat with ${currentChat}` : 'Select a chat'}</CardTitle>
                  </CardHeader>
                  <CardContent className="h-[400px] overflow-y-auto">
                    {messages.map((msg, index) => (
                      <div key={index} className={`mb-2 ${msg.sender === 'You' ? 'text-right' : 'text-left'}`}>
                        <span className={`inline-block p-2 rounded-lg ${msg.sender === 'You' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                          {msg.text}
                        </span>
                      </div>
                    ))}
                  </CardContent>
                  <CardFooter>
                    <form onSubmit={sendMessage} className="w-full flex space-x-2">
                      <Input 
                        value={newMessage} 
                        onChange={(e) => setNewMessage(e.target.value)} 
                        placeholder="Type a message..." 
                        className="flex-1"
                      />
                      <Button type="submit">Send</Button>
                    </form>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="friends">
              <div className="grid grid-cols-2 gap-4">
                {['David', 'Eva', 'Frank', 'Grace'].map((friend) => (
                  <Card key={friend}>
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={`https://i.pravatar.cc/150?u=${friend}`} alt={friend} />
                          <AvatarFallback>{friend[0]}</AvatarFallback>
                        </Avatar>
                        <CardTitle>{friend}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">Online</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">Send Message</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="servers">
              <div className="grid grid-cols-3 gap-4">
                {['Gaming Galore', 'Music Mania', 'Art Attack'].map((server) => (
                  <Card key={server}>
                    <CardHeader>
                      <CardTitle>{server}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img src={`https://picsum.photos/seed/${server}/300/200`} alt={server} className="w-full h-40 object-cover rounded-md mb-4" />
                      <p className="text-sm text-gray-500">A community for {server.toLowerCase()} enthusiasts</p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Join Server</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="subscription">
              <div className="grid grid-cols-3 gap-4">
                {['Nitro Classic', 'Nitro Gold', 'Nitro Diamond'].map((tier, index) => (
                  <Card key={tier} className={`bg-gradient-to-br ${index === 0 ? 'from-blue-400 to-blue-600' : index === 1 ? 'from-yellow-400 to-yellow-600' : 'from-purple-400 to-purple-600'} text-white`}>
                    <CardHeader>
                      <CardTitle>{tier}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img src={`https://picsum.photos/seed/${tier}/300/200`} alt={tier} className="w-full h-40 object-cover rounded-md mb-4" />
                      <ul className="space-y-2">
                        <li>✓ Custom Emojis</li>
                        <li>✓ HD Video</li>
                        {index > 0 && <li>✓ Server Boosts</li>}
                        {index > 1 && <li>✓ Exclusive Badge</li>}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="secondary" className="w-full">Subscribe</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="music">
              <Card>
                <CardHeader>
                  <CardTitle>Music Player</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {musicList.map((track, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                        <div>
                          <h3 className="font-semibold">{track.title}</h3>
                          <p className="text-sm text-gray-500">{track.artist}</p>
                        </div>
                        <Button onClick={() => setCurrentTrack(track)} variant="outline">
                          {currentTrack === track ? 'Playing' : 'Play'}
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  {currentTrack && (
                    <div className="w-full text-center">
                      <p className="font-semibold">Now Playing:</p>
                      <p>{currentTrack.title} - {currentTrack.artist}</p>
                    </div>
                  )}
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
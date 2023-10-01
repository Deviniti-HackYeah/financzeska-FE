import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/components';
import { ChatWrapper, FlashCardsWrapper } from '@/pages/homepage/components';
import { useToast } from '@/shared/components/toast/use-toast';
import { useChatStore } from '@/shared/stores/chat-store';
import { DialogClose } from '@radix-ui/react-dialog';
import { getChatData } from '@/api/chat';
import { MailIcon } from 'lucide-react';
import { useQuery } from 'react-query';
import { useEffect } from 'react';

export const Homepage = () => {
  const {
    chatBubbles,
    updateChatBubbles,
    flashCards,
    updateFlashCards,
    setUseTyper,
  } = useChatStore();
  const { data } = useQuery('chatDBDat', getChatData);
  const { toast } = useToast();

  useEffect(() => {
    if (data) {
      updateChatBubbles(data.chatBubbles);
      updateFlashCards(data.flashCards);
      setUseTyper(false);
    }
  }, [data]);

  return (
    <div className="h-full w-full bg-slate-200 p-6">
      <div className="grid h-full grid-cols-5 space-x-6">
        <ChatWrapper
          chatBubbles={chatBubbles}
          addChatBubble={updateChatBubbles}
        />
        {!flashCards.length ? (
          <div className="col-span-3 flex items-center justify-center">
            <img
              className="h-[400px]"
              src="/assets/financzeska.svg"
              alt="flashcards"
            />
          </div>
        ) : (
          <FlashCardsWrapper flashCards={flashCards} />
        )}
      </div>

      <Dialog>
        <DialogTrigger>
          <div className="fixed bottom-4 right-6 cursor-pointer rounded-full bg-indigo-500 p-6 shadow-lg">
            <MailIcon className="text-white" />
          </div>
        </DialogTrigger>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Otrzymuj powiadomienia</DialogTitle>
            <DialogDescription>
              Czy chcesz otrzymywać powiadomienia e-mail o o nadchodzących
              wydarzeniach?
            </DialogDescription>
            <DialogFooter>
              <DialogClose asChild>
                <Button
                  onClick={() => {
                    toast({
                      title: 'Gotowe!',
                      description:
                        'Od teraz będziesz otrzymywać powiadomienia o nadchodzących wydarzeniach',
                      duration: 5000,
                    });
                  }}
                >
                  Tak
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button>Anuluj</Button>
              </DialogClose>
            </DialogFooter>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

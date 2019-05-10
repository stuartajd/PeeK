<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class TaskUpdated extends Notification
{
    use Queueable;
    protected $task;
    protected $user;
    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($user, $task)
    {
    	$this->user = $user;
        $this->task = $task;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
    	$status = array("awaiting"=>"Awaiting Assignment", "assigned"=>"Assigned", "progress"=>"In Progress", "complete"=>"Complete", "quality"=>"Ready for QA");

        return (new MailMessage)
	        ->greeting('Hi '. $this->user->name)
            ->line('The task status for '. $this->task->title .' has been changed to '. $status[$this->task->status].'.')
            ->action('View Task', url('/tasks/view/' . $this->task->id));
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}

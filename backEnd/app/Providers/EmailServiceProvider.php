<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

// dump("Hello world");
class EmailSerieceProvider extends Mailable
{
    use Queueable, SerializesModels;

    public $messageContact;
    public $subjectContent;
    public $code;

    /**
     * Create a new message instance.
     *
     * @param  string  $message
     * @param  string  $subject
     * @param  string  $code
     * @return void
     */
    public function __construct($message, $subject, $code)
    {
        $this->subjectContent = $subject;
        $this->code = $code;
        $this->messageContact = $message;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject($this->subjectContent)
                    ->view('emails.welcome')  // Make sure this view exists
                    ->with([
                        'code' => $this->code,
                        'messageContact' => $this->messageContact,
                    ]);
    }

}
